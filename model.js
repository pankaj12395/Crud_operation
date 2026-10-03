const {default:mongoose}=require("mongoose")



const userSchema= new mongoose.Schema({
    title:{
        type:String,
        require:true

    },
    
    userId:{
      
         type:String,
        require:true,
    },


    caption:{
        type:String,
        require:true

    },
    likes:{ 
        type:String,
        require:true


    },

    location:{
         type:String,
        require:true


    },

    reachCount:{
         type:String,
        require:true


    }   
})
const UserModel=mongoose.model("register" ,userSchema)
module.exports = UserModel