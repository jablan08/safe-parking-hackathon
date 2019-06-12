const express = require('express');
const router = express.Router();

const Resource = require("../models/Resource")


/* GET home page. */
router.get('/', async (req, res) => {
  
  try {
    const resources = await Resource.find({});
    res.json({resources})
  } catch (error) {
    res.json({error})
  }
});

router.post('/new', async (req, res) => {
  try {
    console.log(req.body)
    const newResource = await Resource.create(req.body)
    console.log(newResource)
    res.json({
      newResource
    })
  } catch (error) {
    res.json(error)
  } 
});

router.delete('/:id', async (req, res) => {
  try {
    const deletedResource = await Resource.findByIdAndRemove(req.params.id)

    res.json({
      deletedResource
    })
  } catch (error) {
    console.log(error)
  }
})



module.exports = router;
