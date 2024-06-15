// import model
const Todo = require("../models/Todo")

// Define route handler

exports.deleteTodo = async(req,res) => {
    try{
          const {id} = req.params;
          await Todo.findByIdAndDelete({_id:id}) 
          res.json({
            success:true,
            message:`Todo ${id} is Deleted Succefully...`
          })
    }
    catch(error){
        console.log(error);
        console.log(error);
        res.status(500)
        .json({
            success:false,
            error:error.message,
            message:'Server Error'
     } )
            
        
    }
}