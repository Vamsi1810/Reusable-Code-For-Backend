const express = require('express')
const studentModel = require('../Models/studentModel')
const router = express.Router()

router.get('/',async(req,res)=>{
    try{
        const studentdata = await studentModel.find()
        res.json(studentdata)
    }
    catch(err){
        res.send('Error is '+ err)
    }
})

router.get('/:id',async (req,res)=>{
    try{
        const student = await studentModel.findById(req.params.id)
        res.json(student)
    }
    catch(err){
        res.send('Error is '+err)
    }
})


router.post('/add',async (req,res)=>{
    const stud = new studentModel({
        name : req.body.name,
        idno : req.body.idno,
        department : req.body.department,
        password : req.body.password
    })

    try{
        const saveStatus = await stud.save();
        res.json(saveStatus)
    }
    catch(err){
        res.send('Error')
    }
})

router.delete('/delete/:id',async (req,res)=>{
    try{
        await studentModel.findByIdAndDelete(req.params.id);
        res.send('Deleted')
    }
    catch(err){
        res.send('Error is '+err)
    }
})

router.put('/update/:id',async (req,res)=>{
    try{
        await studentModel.findByIdAndUpdate(req.params.id,{
            name : req.body.name,
            idno : req.body.idno,
            department : req.body.department,
            password : req.body.password
        });
        res.json({status : 'updated'})
    }
    catch(err){
        res.json({error: err})
    }
})

module.exports = router