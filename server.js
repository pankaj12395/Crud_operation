const express = require("express");
const connectDB = require("./datbase");
const UserModel=require("./model")
const app=express()
app.use(express.json())
connectDB()    

app.get("/users", async (req, res) => {
  try {
    let users = await UserModel.find();

    return res.status(200).json({
      message: "Users fetched",
      success: true,
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
});



app.post("/user", async (req,res)=>{
    try{
       let { title,userId , caption, likes,location,reachCount }= req.body
       console.log(req.body)
        const users=await UserModel.create({
            title:title,
             userId, 
             caption, 
             likes, 
             location,
            reachCount 
            })
  return res.status(201).json({
    success: true,
    message: "ban gayi",
    data: users,
      });
    }
    catch (error) {
     console.log(error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    })}


})

app.delete('/delete',async (req,res)=>{
      try{
        // let {id} =req.body
          let {userId} = req.body

        // const user = await UserModel.findByIdAndDelete(id)
        const user = await UserModel.find
        console.log(user)
        if(user){
        return  res.status(200).json({
          message:"user deleted"
        })
      }
      else{
        return res.status(404).json({
          message:"user not found"
        })
      }
      } catch(error)
      {
        console.log("dd",error)
      }
})
app.put("/update", async(req,res) =>{
  try{
    let {userId ,title,caption}=req.body
    let update=await UserModel.findOneAndUpdate(
      {userId:userId},
      { $set:{title:title,caption:caption}},
    
      //{ $set: { title:title },userId:userId}}},
    {new:true})
    console.log(update)
     return res.status(200).json({
          message:"done",
          data:update
        })
  }
  catch(error){
    console.log(error)
  }

})




app.listen(4000, ()=>{
    console.log('server running on port 3000${port}')
})