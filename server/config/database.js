import mongoose from "mongoose"

export const connectedDb = ()=>{

    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connected to Database');
    }).catch((err)=>{
        console.log(err.message);
    })
}

