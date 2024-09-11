import mongoose from "mongoose";

export const  connectDB = async () =>{

   await mongoose.connect('mongodb+srv://tomatofooddel:Rohan.1995@cluster0.nqcv7.mongodb.net/food-del')
  .then(() => console.log("DB Connected"))
  .catch(err => console.error("DB Connection Error:", err));

    
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
