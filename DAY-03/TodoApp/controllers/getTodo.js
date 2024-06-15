// import model
const Todo = require("../models/Todo")

// Define route handler

exports.getTodo = async(req,res) => {
    try{
            //fetch all todo items from database
            const response = await Todo.find({});
            //response
            res.status(200).json(
                {
                    success:true,
                    data: response,
                    message:'Entire Todo Data is Fetched...'

                }
            );
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



exports.getTodoById = async(req,res) => {
    try{
        //extract todo items basis on id
        const id = req.params.id;
        const todo = await Todo.findById({_id:id})

        // data for given id is not found
        if(!todo){
            return res.status(404).json(
                {
                    success:true,
                    message:"NO Data is Found with Given Id..."
                }
            )
        }
        //data for given Id
        res.status(200).json({
            success:true,
            data:todo,
            message:`Todo ${id} Data Successfully Fetched...`
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