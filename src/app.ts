import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from './config';
import errorHandler from './middleware/errorHandler';
import fourOhFour from './middleware/fourOhFour';
import root from './routes/root';

import mongoose from 'mongoose';

const app = express()

// Connect to MongoDB
if (!process.env.MONGODB) throw new Error("Please make sure the mongodb string is in the .env file")
mongoose.connect(process.env.MONGODB);

// Apply most middleware first
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({
    // @ts-ignore
    origin: config.clientOrigins[config.nodeEnv]
}))
app.use(helmet())
app.use(morgan('tiny'))

// Apply routes before error handling
app.use('/', root)

// Apply error handling last
app.use(fourOhFour)
app.use(errorHandler)

export default app
