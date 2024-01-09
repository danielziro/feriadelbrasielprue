const {Schema, model}= require('mongoose')

const clotheSchema = new Schema({
    nombreProducto: {
        type:String,
        require:true
    } ,
    precio: {
        type:String,
        require:true
    } 
    ,
    referencia: {
        type:String,
        require:true
    } ,
    talla: {
        type:String,
        require:true
    } ,
    color: {
        type:String,
        require:true
    } ,
    categoria: {
        type:String,
        require:true
    },
    imagep:{
        type:String,
        require:true
    }
});

module.exports = model('Clothes', clotheSchema);