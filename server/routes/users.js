const express = require('express');
const router = express.Router();
const {User} = require('../models/user');

router.get('/',async (req,res)=>{

    const users = await User.find({});
     if(!users) return res.status(400).send('No users found');
     res.send(users);

});

router.post('/',async (req,res)=>{

    const usr = await User(req.body).save();

    if(!usr) return res.status(400).send('Users not saved');

    res.send(usr);

});

module.exports = router;