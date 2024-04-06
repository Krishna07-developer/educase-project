import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
    fullname : {
        type : String,
        required : true
    },
    phonenumber : {
        type : Number,
        required : true
    },
    emailaddress : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    agency : {
        type : String,
        required : true
    },
    companyname : {
        type : String,
        default : 'UnKnown'
    }
},{
    timestamps : true
})

export const User = mongoose.model('User', userSchema)
