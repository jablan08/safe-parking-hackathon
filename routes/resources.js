const express = require('express');
const router = express.Router();

const Resource = require("../models/Resource")


/* Get all resources */
router.get('/', async (req, res) => {
  
  try {
    const resources = await Resource.find({});
    res.json({
      resources,
      success: resources ? true : false
    })
  } catch (error) {
    res.json({error})
  }
});


// Create resource
router.post('/new', async (req, res) => {
  try {
    if(req.body.walkInsAllowed==="on"){
      req.body.walkInsAllowed=true
    }else{
      req.body.walkInsAllowed=false
    }
    const newResource = await Resource.create(req.body)
    res.json({
      newResource,
      success: newResource ? true : false
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
      deletedResource,
      success: deletedResource ? true : false
    })
  } catch (error) {
    res.json({error})
  }
})

//Edit resource

router.put('/:id', async (req,res)=> {
  try {
    const resource = await Resource.findByIdAndUpdate(req.params.id, req.body, {new:true});
    resource.save()
    res.json({
      resource,
      success: resource ? true : false
    });
  } catch (error) {
    res.json({error})
  }
});

router.get('/:id', async (req, res) => {
  
  try {
    const resource = await Resource.findById(req.params.id);
    res.json({resource})
  } catch (error) {
    res.json({error})
  }
});

module.exports = router;
