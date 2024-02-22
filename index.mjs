import express from "express";

const app = express();
const PORT = 1111;

app.use(express.static("public"));
app.get("/",(req,res)=>
res.send(
{
    message:"everything is working"
}))
app.listen(PORT,()=>{
    console.log("Server is running on ",PORT);
})
