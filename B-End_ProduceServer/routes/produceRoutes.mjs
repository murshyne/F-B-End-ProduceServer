import express from "express";
import produce from '../models/produceSchema.mjs';

const router = express.Router();

// Create
router.post('/', (req, res) =>{
    try {
        // Create a new produce Obj
       let newProduce = new Produce(req.body); 

    //    save
    } catch (error) {
        console.error(err)
        res.status(500).json ({msg: 'Server Error'})
    }
})


// Read
router.get("/", async (req, res) => {
  try {
    // Find ALL {} produce from DB
    let allProduce = await Produce.find({});
    // Return Result
    res.json(allProduce);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {

  } catch (error) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

// Delete
router.delete("/", (req, res) => {
  try {
  } catch (error) {
    console.error(err);
    res.status(500).json({ msg: "Server Error" });
  }
});


// router.route('/seed').get(produceCTRL.seedDB);

export default router;
