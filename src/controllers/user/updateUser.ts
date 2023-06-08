import { RequestHandler } from 'express'
import User from '../../models/User';

const updateUser: RequestHandler = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
}

export default updateUser