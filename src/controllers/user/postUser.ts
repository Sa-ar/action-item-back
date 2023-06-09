import { RequestHandler } from 'express'
import User from '../../models/User';

const postUser: RequestHandler = async (req, res) => {
  const { login: { uuid: id }, name, gender, location, email, phone, picture, dob } = req.body;
  const newUser = new User({ id, name, gender, location, email, phone, picture, dob });
  await newUser.save();
  res.status(201).json(newUser);
}

export default postUser