import Booking from '../models/Booking.js';

// Create a new Booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body);
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({ success: true, message: 'Your tour is booked', data: savedBooking });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};

// Get a Booking
export const getBooking = async (req, res) => {
    const id = req.params.id;

    try {
        const book = await Booking.findById(id);
        res.status(200).json({ success: true, message: 'Successful', data: book });
    } catch (err) {
        res.status(404).json({ success: false, message: 'Not found' });
    }
};

// Get all Bookings
export const getAllBooking = async (req, res) => {
    try {
        const books = await Booking.find();
        res.status(200).json({ success: true, message: 'Successful', data: books });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Internal server error' });
    }
};
