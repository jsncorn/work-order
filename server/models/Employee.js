const mongoose = require('mongoose');
const {
  Schema
} = mongoose;
const bcrypt = require('bcrypt');
const Order = require('./Order');

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
  },
  password: {
    type: String,
    required: true,
    minlength: 8
  },
  //should print out all the work orders
  orders: [Order.schema]
});

employeeSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

employeeSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;