import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  id: String,
  name: String,
  email: String,
  orders: {
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order"}]
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

console.log(mongoose.models, 'models')
const Customer = mongoose.models?.Customer || mongoose.model('Customer', customerSchema);

export default Customer;
