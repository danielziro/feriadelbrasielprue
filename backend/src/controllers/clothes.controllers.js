const clothCtrl = {};

const Clothe = require('../models/Clothes');
const fs = require("fs");
const path = require('path');
const dirPath = path.join(__dirname, '/pictures');

//get all clothes
clothCtrl.getClothes = async (req,res)=> {
   const clothes = await Clothe.find();
    res.json(clothes);
   
} 
//create clothes
clothCtrl.createClothe = async(req,res)=> {
   
    if (!req.files||Object.keys(req.files).length==0) {
       return res.status(400).send("No viene IMAGEN!!");
     
    }
    let imagePas =req.files.imagep
    let tempFilePath =`${ dirPath}${imagePas.name}` ;
    imagePas={
        url:tempFilePath
    }
   
   
   const {nombreProducto,precio,referencia, talla, color,categoria,imagep=imagePas.url} = req.body;
   const newClothe = new Clothe({
        nombreProducto,
        precio,
        referencia,
        talla,
        color,
        categoria,
        imagep
    })
    
    await newClothe.save();
    res.json({message: 'Clothes Save'});
}

//get clothe FOR ID
clothCtrl.getClothe = async(req,res)=> {
    const clothes = await Clothe.findById(req.params.id);
    console.log(clothes);
    res.json({clothes});
} 

//update clothe
clothCtrl.udapteClothe = async(req,res)=> {

    if (!req.files||Object.keys(req.files).length==0) {
        return res.status(400).send("No viene IMAGEN!!");
      
     }
     let imagePas =req.files.imageP
     let tempFilePath =`${ __dirname}upload/${imagePas.name}` ;
     imagePas={
         url:tempFilePath
     }

   const {nombreProducto,precio,referencia, talla, color,categoria,imagep=imagePas.url} = req.body;
    
   await Clothe.findOneAndUpdate({_id: req.params.id},{
    nombreProducto,
    precio,
    referencia,
    talla, 
    color,
    categoria,
    imagep
   });
   res.json({message:"Update Clothe"})
};
   

//delete Clothe
clothCtrl.deleteClothe = async(req,res)=> {
   const clothe =await Clothe.findByIdAndDelete(req.params.id);
    res.json('Delete: Clothes')
};

module.exports = clothCtrl;