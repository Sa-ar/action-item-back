import { RequestHandler } from 'express'
import User from '../../models/User';

const deleteUser: RequestHandler = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(204).end();
}

export default deleteUser