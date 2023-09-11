const express= require(`express`)
const cors= require(`cors`)
const parser= require(`body-parser`)
const mongoose= require(`mongoose`)
const FoodModel= require(`./model/Food2`)

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb+srv://admin1998:admin1998@cluster0.2dqzkk4.mongodb.net/?retryWrites=true&w=majority/food")
.then(()=>console.log(`Connected to mongoose`))
.catch((err)=>console.log(err))

//add food
app.post(`/insert`,async(req,res)=>{
    console.log(req.body)
    const foodName = req.body.foodname;
    const description = req.body.description;

    const food = new FoodModel({
        foodName:foodName,
        description:description,
    })

    try{
        await(food.save());
        console.log(`Saved Successfully`)
        return res.json({Status:`Success`})
    }
    catch(err){
        console.error(err)
    }
})

//retrive foods
app.get(`/get`,(req,res)=>{
    FoodModel.find()
    .then(result=>{
        return res.json({Status:`Success`,Result:result})
    })
    .catch(err=>console.log(err))
})

//update foods
app.put(`/update/:id`,async(req,res)=>{
    const id = req.params.id
    const newFoodName=req.body.name;
    try{
        await FoodModel.findById(id)
        .then(updatedFood => {
              updatedFood.foodName=newFoodName;
              updatedFood.save();
              res.send("update");
          });
      }catch(err){
          console.log(err);
      }
})

//delete foods
app.delete(`/delete/:id`,(req,res)=>{
    const id = req.params.id
    console.log(id)
    FoodModel.findByIdAndDelete(id)
    .then(result=>{
        return res.json({Status:`Success`})
    })
    .catch(err=>console.log(err))
})

app.listen(5000,()=>{
    console.log(`Server is running on port 5000`)
})