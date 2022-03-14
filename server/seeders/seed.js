const db = require('../config/connection');
const { Order, Employee } = require('../models');
const orderSeeds = require('./orderSeeds.json');
const employeeSeeds = require('./employeeSeeds.json');

db.once('open', async () => {
  await Order.deleteMany({});
  await Order.create(orderSeeds);
  await Employee.create(employeeSeeds)

  console.log('all done!');
  process.exit(0);
});
