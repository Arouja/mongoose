
const express=require("express")
const { Addcontact, Contacct, DeleteContact, UPDATEContact, Contactidd } = require("../controllers/contact")
const route=express.Router()




 
//method post
//req.body

route.post('/', Addcontact)

// //method get

route.get('/',  Contacct)

//method delete
//req.params


route.delete('/:ID', DeleteContact)

//method put
//req.params


route.put('/:ID', UPDATEContact)

//method get 
//req.params

route.get('/:ID', Contactidd)

module.exports=route
