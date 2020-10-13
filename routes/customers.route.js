const customerRouter = require('express').Router();
const Customer = require('../models/customers.model');

customerRouter.get('/', ((req, res) => {
    Customer.find()
    .then(customers => res.json(customers))
    .catch(err => res.status(400).json(`Error: ${err} `))
} ))

customerRouter.post('/addcustomer', ((req, res) => {
    console.log(req.body);
    const {rooms} = req.body;
    const {name, email, phonenumber, passportnumber, bookeddate} = req.body.customerselect

    const newCustomer = new Customer({name, email, phonenumber, passportnumber, bookeddate, rooms})
    newCustomer.save()
    .then(() => res.json('customer added'))
    .catch(err => res.status(400).json(`Error: ${err}`))
}))

module.exports = customerRouter;