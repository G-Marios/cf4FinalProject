import express from 'express';
import {
    createTour,
    deleteTour,
    getAllTour,
    getFeaturedTour,
    getOneTour,
    getTourBySearch,
    getTourCount,
    updateTour
} from '../controllers/tour.controller.js';
import { isAdmin } from '../utils/verifyToken.js';

const router = express.Router();

router.post('/', isAdmin, createTour);
router.put('/:id', isAdmin, updateTour);
router.delete('/:id', isAdmin, deleteTour);
router.get('/:id', getOneTour);
router.get('/', getAllTour);
router.get('/search/getTourBySearch', getTourBySearch);
router.get('/search/getFeaturedTours', getFeaturedTour);
router.get('/search/getTourCount', getTourCount);

export default router;
