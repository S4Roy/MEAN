const express = require('express');
const router = express.Router();
const moongose = require('../database/mongoose');
const Event = require('../models/event');



router.post('/add-event', (req, res) => {
    let eventData = req.body
    let event = new Event(eventData)
    event.save((error, data) => {
        if(error){
            console.log(error)
        }
        else{
            res.status(200).send(data)
        }
    })
})



module.exports = router;