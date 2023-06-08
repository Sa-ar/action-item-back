import express from 'express'
import getRoot from '../controllers/root/getRoot'
import userRoot from './user'

const root = express.Router()

root.get('/', getRoot)
root.use("/users", userRoot)

export default root