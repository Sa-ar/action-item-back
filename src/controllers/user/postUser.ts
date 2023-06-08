import { RequestHandler } from 'express'
import User from '../../models/User';

const postUser: RequestHandler = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.status(201).json(newUser);
}

export default postUser