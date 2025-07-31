const mongoose=require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const connectDb=async()=>{
  try{
  await mongoose.connect(process.env.MONGO_URL);
  console.log("mongo Connected")
  }catch(err){
    console.log("Db Connection Failed ",err.message);
  }
  
}



module.exports=connectDb;