import express from "express"
import cors from "cors";
import mongoose from "mongoose";

mongoose.connect(`mongodb://localhost:27017/Dillinger`,{
    useNewUrlParser: true,
    useUnifiedTopology: true 
}).then(()=>{
    console.log(`conectado a la base de datos`)
}).catch(err=>{
    console.error(`Error de conexión: ${err}`)
})

const app = express()
app.use(cors());

app.get("/inicio",(req,res)=>{
    res.send(`Buenos dias, este mensaje es traido desde el back!`)
})




const port = 27017;

app.listen(port)


console.log("Projecto iniciado")