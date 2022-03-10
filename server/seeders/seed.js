const db = require('../config/connection');
const { Order } = require('../models');
const orderSeeds = require('./orderSeeds.json');

db.once('open', async () => {
  await Order.deleteMany({});
  await Order.create(orderSeeds);

  console.log('all done!');
  process.exit(0);
});
