import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://tomatofooddel:Rohan.1995@cluster0.p6vnc.mongodb.net/?').then(()=>console.log("DB Connected"));
   
}


// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
