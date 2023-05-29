import mongoose, { model } from 'mongoose';
const { Schema } = mongoose;

const userSchema = new Schema({
  email: String, // String is shorthand for {type: String}
  password: String, // String is shorthand for {type: String}
  username: String, 
});

export default model('User', userSchema, 'users');