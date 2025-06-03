const mongoose = require('mongoose')

const customerSchema = new mongoose.Schema({
    customerName: { type: String, required: true },
    location: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true }, 
  });



const CustomersModel = mongoose.model("Customers", customerSchema)

module.exports = CustomersModel