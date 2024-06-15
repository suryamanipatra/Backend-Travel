// import model
const Todo = require("../models/Todo")

// Define route handler

exports.updateTodo = async(req,res) => {
    try{
       const {id} = req.params;
       const {title,description} = req.body;
       const todo = await Todo.findByIdAndUpdate({_id:id},{title,description,updateAt: Date.now()})
       res.status(200).json({
        success:true,
        data:todo,
        message:`Updated ${id} data Successfully`
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
        })
        
    }
}