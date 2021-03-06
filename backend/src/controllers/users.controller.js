
const userCtrl = {};
const User = require('../models/User');
const Jwt = require('jsonwebtoken');
const Config = require('../../config');
userCtrl.getUsers   = async (req,res)=>{
        const users = await User.find();
        res.json(users)
    
}
userCtrl.getAuth = async (req,res)=>{
  const token = req.headers['x-access-token'];
  if(!token){
    return res.status(401).json({
      auth: false,
      message: 'No token provided'
    });
  }else{
      const decoded= Jwt.verify(token,Config.secret);
    const user = await  User.findById(decoded.id, {password:0,passRepeat:0});
    if(!user){
      return res.status(404).send('No user found');
    }
      res.json(user)
  }
}

userCtrl.validateAuth = async (req, res) =>{
const {email,password} = req.body;
const user = await User.findOne({email: email});
if(!user){
  return res.status(404).send('the email doesnt exists');
}
const validatePass = await user.validatePassword(password);
if(!validatePass){
  res.status(401).json({auth:false,token: null});
}

const token = Jwt.sign({id: user._id}, Config.secret,{
  expiresIn: 60*60*24
});


res.json({auth:true, token: token});

}


userCtrl.createUser = async (req,res)=>{
    const {username, name,sirname, password,passRepeat,email,terms} = req.body;

    const newUser = new User (
        {
            username,
            name,
            sirname,
            password,
            email,
            passRepeat,
            terms

        }
        
        );

    newUser.password = await newUser.encryptPassword(newUser.password);
    newUser.passRepeat = await newUser.encryptPassword(newUser.passRepeat);
    await newUser.save();
   const token = Jwt.sign({id: newUser._id}, Config.secret,{
      expiresIn: 60*60*24
    });
    res.json({auth:true,token})
}
userCtrl.deleteUser = async (req,res)=>{
    await User.findByIdAndDelete(req.params.id)
    res.json({messaje:'DELETE - USER'})

}
userCtrl.updateUser = async (req,res)=>{
    await User.findOneAndUpdate(req.params.id,req.body);
    res.json({messaje:'DELETE - USER'})

}

userCtrl.searchUser = async (req,res)=>{
  await User.findOne(req.body);
  res.json({messaje:'Search Complete'})
}

module.exports = userCtrl;