const mongoose= require(`mongoose`)

const foodSchema = new mongoose.Schema({
    foodName:{type:String,required:true},
    description:{type:String,required:true},
})

const Food = mongoose.model("foodtype",foodSchema);

module.exports = Food;
