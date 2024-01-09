const userCtrl = {};

const User = require('../models/Users');
//get all users Method
userCtrl.getUsers = async(req,res)=>{
    const user = await User.find();
    res.json({user});
};

//create user Method
userCtrl.createuser = async(req,res)=>{
    const {userName,userPass, charge} = req.body;
    const newUser = new User({
        userName,
        userPass,
        charge
     })
     await newUser.save();
     res.json({message: 'User Save'});
}

//get user

userCtrl.getUser = async(req,res)=> {
    const user = await User.findById(req.params.id);
    console.log(user);
    res.json({user});
};


userCtrl.udapteUser = (req,res)=> res.json({message: 'Update: user'});


userCtrl.deleteUser= (req,res)=> res.json({message: 'Delete: user'});

module.exports = userCtrl;