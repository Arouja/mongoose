const Contact =  require("../models/Contact")
exports.Addcontact= async (req,res)=>{
    try {
    
        const AddedContact= new Contact(req.body)
       await AddedContact.save()
        res.status(200).send({msg:'contact added', AddedContact})
    
        } 
    catch (error) {
    
        res.status(500).send({msg:'contact not added'})
    }
    
    }

exports.Contacct= async (req,res)=>{
    try {
     const  contacts= await Contact.find()
      res.status(200).send({msg:'contact list', contacts})
    } 
    catch (error) {
        res.status(500).send({msg:'could not find contacts'})
    }

}



exports.DeleteContact= async   (req,res)=>{
    const {ID}=req.params
try {
    const removedcontact= await Contact.findByIdAndDelete(ID)
    res.status(200).send({msg:'contact deleted', removedcontact})
} catch (error) {
    res.status(500).send({msg:'contact not delete'})
}

}



exports.UPDATEContact= async   (req,res)=>{
    const {ID}=req.params
try {
    const updatecontact= await Contact.findByIdAndUpdate(ID, {$set:{...req.body}})
    res.status(200).send({msg:'contact updated', updatecontact})
} catch (error) {
    res.status(200).send({msg:'contact not updated'})
    
}

}



exports.Contactidd= async   (req,res)=>{
    const {ID}=req.params
try {
    const  contacts= await Contact.findById(ID)
      res.status(200).send({msg:'contact ', contacts})
} catch (error) {
      res.status(500).send({msg:'not found'})
}



}