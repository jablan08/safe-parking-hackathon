const express = require('express');
const router = express.Router();

const Resource = require("../models/Resource")


/* Get all resources */
router.get('/', async (req, res) => {
  
  try {
    const resources = await Resource.find({});
    res.json({resources})
  } catch (error) {
    res.json({error})
  }
});

// Create resource
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

// Delete resource
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

//Edit resource

router.put('/:id', async (req,res)=> {
  try {
    const editedResource = await Resource.findByIdAndUpdate(req.params.id, req.body, {new:true});
    editedResource.save()
    res.json({
      editedResource
    });
  } catch (error) {
    res.json({error})
  }
});



module.exports = router;
