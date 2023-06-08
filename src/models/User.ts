import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    title: String,
    first: String,
    last: String,
  },
  gender: String,
  location: {
    country: String,
    state: String,
    city: String,
    street: {
      number: Number,
      name: String,
    },
  },
  email: String,
  phone: String,
  picture: {
    large: String,
    thumbnail: String,
  },
  dob: {
    date: String,
    age: Number,
  },
});

const User = mongoose.model('User', UserSchema);

export default User;
