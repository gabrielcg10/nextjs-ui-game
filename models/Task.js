const TaskSchema = new Schema({
    
    title:{
        type: String,
        require: [true, "Ingrese titulo"]
    },
    description:{
        type: String,
        require: [true, "Ingrese description"]
    }
})

export default TaskSchema;