// const { Router } = require('express')
const { getUser, allUsers, addUser, updateUser, deleteUser } = require('../controllers/controllers')

const router = require('express').Router()

router.get("/get-user/:id",getUser)
router.get("/all-users",allUsers)
router.post("/add-user",addUser)
router.put("/update-user/:id",updateUser)
router.delete("/delete-user/:id",deleteUser)


module.exports = router