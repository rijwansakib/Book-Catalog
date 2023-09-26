import express from 'express';
import { ReviewController } from './review.controller';

const router = express.Router();

router.post('/comment/:id', ReviewController.createComment);
router.get('/comment/:id', ReviewController.getComment);
export const ReviewRoutes = router;
