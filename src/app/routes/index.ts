import express from 'express';
import { BooksRoutes } from '../modules/books/books.route';
import { ReviewRoutes } from '../modules/review/review.route';
import { WishRoute } from '../modules/wishList/wishList.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/books',
    route: BooksRoutes
  },
  {
    path: '/review',
    route: ReviewRoutes
  },
  {
    path: '/wishlist',
    route: WishRoute
  },

];

moduleRoutes.forEach(route => router.use(route.path, route.route));
export default router;

