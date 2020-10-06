const roomsRouter = require('express').Router();
const Room = require('../models/rooms.model');

roomsRouter.get('/', ((req, res) => {
    Room.find()
    .then(rooms => res.json(rooms))
    .catch(err => res.status(400).json(`Error: ${err}`))
}))

roomsRouter.post('/addroom', ((req, res) => {
    const {roomtype, numberofrooms, beds, addons, price, customer} = req.body;

    const newRoom = new Room({roomtype, numberofrooms, beds, addons, price, customer}); 
    newRoom.save()
    .then(() => res.json('added room'))
    .catch(err => res.status(400).json(`Error: ${err}`))
}))

module.exports = roomsRouter;