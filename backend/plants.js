
const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express")
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/plantsdb")
  .then(() => {
    console.log(" mongosedb connected");
  })
  .catch((err) => {
    console.log(err);
  });

const plantsSchema = new mongoose.Schema({
  name: String,
  course: String,
  fee: Number
});

const plants = mongoose.model("plants", plantsSchema);

// get-fetch data 
app.get("/", async (req, res) => {
  const x = await plants.find();
  res.send(x);
});


app.get("/Update/:id",async(req,res)=>{
  const data= await plants.findById(req.params.id);
  res.json(data);
});


   // UPDATE data (PUT)
app.put("/update/:id", async (req, res) => {
  try {
    const { name, course, fee } = req.body;

    const updatedData = await plants.findByIdAndUpdate(
      req.params.id,
      {
        name,
        course,
        fee
      },
      { new: true } 
    );

    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
});


// DELETE data by id
app.delete("/delete/:id", async (req, res) => {
  try {
    await plants.findByIdAndDelete(req.params.id);
    res.json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Delete failed" });
  }
});




    // post-add data 
app.post("/add",async(req,res)=>{
  const{name,course,fee}=req.body;


  const newStudent =new plants({
    name,
    course,
    fee
  });
  await newStudent.save();
  res.json({message:"student added successfully"});
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});