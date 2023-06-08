import express from 'express'
import getUser from '../controllers/user/getUser';
import getAllUsers from '../controllers/user/getAllUsers';
import updateUser from '../controllers/user/updateUser';
import postUser from '../controllers/user/postUser';
import deleteUser from '../controllers/user/deleteUser';

const userRoot = express.Router()

userRoot.get('/', getAllUsers)
userRoot.post('/', postUser)
userRoot.get('/:id', getUser)
userRoot.put('/:id', updateUser)
userRoot.delete('/:id', deleteUser)

export default userRoot