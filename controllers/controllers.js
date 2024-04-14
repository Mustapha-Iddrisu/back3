const User = require("../models/models");

const addUser = (req, res) => {
  User.create(req.body)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.json(err);
    });
};

const allUsers = (req,res)=>{
    User.find({})
    .then((users)=>{
        res.json({count:users.length, users:users})
    })
    .catch((err)=>{
        res.json(err)
    })
}

const getUser = (req,res)=>{
    const {id} = req.params
    User.findById({_id:id})
    .then((user)=>{
        res.json(user)
    })
    .catch((err)=>{
        res.json(err)
    })
}

const deleteUser = (req,res)=>{
    const {id} = req.params
    User.findByIdAndDelete({_id:id})
    .then((user)=>{
        res.json(user)
    })
    .catch(err => res.json(err))
}

const updateUser = (req,res)=>{
    const {id} = req.params
    User.findByIdAndUpdate({_id:id},req.body)
    .then((user)=>{
        res.json(user)
    })
    .catch(err=>res.json(err))
}


module.exports = {
  getUser,
  allUsers,
  updateUser,
  deleteUser,
  addUser,
};
