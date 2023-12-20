const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.MONGO_NAME,
    });
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

const Schema = mongoose.Schema;

//user schema
const userSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String, 
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscriptions: [{type: String}]
})

const User = mongoose.model('user', userSchema);

//sub schema
const subscriptionSchema = new Schema({
    planName: {
        type: String, 
        required: true,
    },
    monthlyCost: {
      type: Number,
    },
    subscribers: [{type: String}],
})

const Subscription = mongoose.model('subscription', subscriptionSchema);

//member
const memberSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  hasPaid: {
    type: Boolean,
  },
})

const Member = mongoose.model('member', memberSchema);

connectDB()

module.exports = {
 User,
 Subscription,
 Member,
}


