const express=require('express');
const dotenv=require('dotenv');
const connectDb = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');

const cors = require('cors');


dotenv.config();
connectDb();
const app=express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
  res.json("Hey I am the server")
})


app.use('/api/items', itemRoutes);





const port=process.env.PORT ||5000 ;
app.listen(port,()=>{
  console.log(`server is connected at http://localhost:${port}`)
})