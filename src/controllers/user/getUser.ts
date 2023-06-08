import { RequestHandler } from 'express'
import User from '../../models/User';

const getUser: RequestHandler = async (req, res) => {
  const user = await User.findById(req.params.id, req.body);
  res.json(user);
}

export default getUser