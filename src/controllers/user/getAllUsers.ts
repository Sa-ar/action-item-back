import { RequestHandler } from 'express'
import User from '../../models/User';

const getAllUsers: RequestHandler = async (req, res) => {
  const users = await User.find({});
  res.json(users);
}

export default getAllUsers