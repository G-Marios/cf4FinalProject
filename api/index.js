import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import tourRoute from './routes/tour.route.js';
import userRoute from './routes/user.route.js';
import authRoute from './routes/auth.route.js';
import reviewRoute from './routes/reviews.route.js';
import bookingRoute from './routes/bookings.route.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials: true
};

//database connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log('MongoDb database connected');
    } catch (err) {
        console.log('MongoDb database connection failed: ');
    }
};

// middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/tours', tourRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/review', reviewRoute);
app.use('/api/v1/booking', bookingRoute);

app.listen(port, () => {
    connect();
    console.log('listening on port ', port);
});
