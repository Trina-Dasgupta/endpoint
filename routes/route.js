const expres = require('express');
const router = new expres.Router;
const User = require('../model/userModel')
const UserProof = require("../model/userProof")


router.post('/user/create', async (req, res) => {
    try {

        const { user_id, username, email, userDetails } = req.body;
        const newUser = await User.create({
            user_id, username, email,
            userDetails
        })
        const userProof = newUser.userDetails
        const userID = newUser._id
        console.log(userID)

        const popout = await User.updateMany({}, { $unset: { userDetails } });
        const newUserProof = await UserProof.create({
            user_id: userID,
            userDetails: userProof

        })
        await newUser.save();

        await newUserProof.save();



        res.status(201).json(newUser);



    } catch (error) {
        res.status(400).json({ message: error.message });
    }

});

module.exports = router;
