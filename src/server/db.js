const mongoose = require('mongoose');

mongoose.connection.once('open', () => {
  console.log('Connected to Database');
});

const URI =
  'mongodb+srv://divvy:test123@cluster0.1pclsez.mongodb.net/?retryWrites=true&w=majority';

const connectDB = async () => {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: 'divvy',
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
    required: true,
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
  subscriptions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'subscription',
    },
  ],
});

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
  subscribers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'member',
    },
  ],
});

const Subscription = mongoose.model('subscription', subscriptionSchema);

//member
const memberSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  hasPaid: {
    type: Boolean,
    default: false,
  },
});

const Member = mongoose.model('member', memberSchema);

connectDB();

module.exports = {
  User,
  Subscription,
  Member,
};
