const express = require('express')
const {connectToMongoDB}=require('./connect')
const urlRoutes=require('./routes/url')
const URL=require("./models/url")
const cookieParser = require('cookie-parser')
const app=express()
const {restrictToLoggedinUserOnly,checkAuth} = require('./middleware/auth')
const staticRoute=require('./routes/static_router')
const userRoutes=require('./routes/user')
const PORT=8000
const path= require('path')
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

connectToMongoDB("mongodb://127.0.0.1:27017/short-url").then(()=>{
    console.log("MongoDB conncted successfully")
})
app.set("view engine", "ejs");
app.set("views",path.resolve('./views'))
app.use("/url",restrictToLoggedinUserOnly,urlRoutes);

app.get('/url/:shortId',async (req,res)=>
{
    const shortId= req.params.shortId;
   const entry= await URL.findOneAndUpdate(
        {
            shortId
        },
        {$push:{
            visitHistory: {timestamp: Date.now()}
        }}
    )
    res.redirect(entry.redirectUrl)
})


app.use('/',checkAuth,staticRoute)
app.use('/user',userRoutes)
app.get('/',async (req,res)=>
{
    const allurls=await URL.find({})
    return res.render('home',{urls:allurls})
})
app.listen(PORT,()=>
{
    console.log(`Server started at ${PORT}`)
})