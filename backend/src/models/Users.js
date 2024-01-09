const {Schema, model}= require('mongoose');

const userSchema = new Schema({
    userName:{
        type: String,
        require:true
    },
    userPass:{
        type:String,
        require:true
    },
    charge:{
        type:String,
        require:true
    }
})

module.exports = model('User', userSchema);