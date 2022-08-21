//this route will handle editing and deleting items, as well rendering the edit page itself

const express= require ('express')
const router = express.Router()
const editController= require ('../controllers/edit')

router.get ('/:id', editController.getEdit)


module.exports= router 