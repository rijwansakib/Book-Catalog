import express from 'express';
import { BookController } from './books.controller';

const router = express.Router();

router.post('/create-books', BookController.createBooks);

router.get('/:id', BookController.getSingleBook);

router.delete('/:id', BookController.deleteBook);

router.patch('/:id', BookController.updateBook);

router.get('/', BookController.getAllBooks);

export const BooksRoutes = router;
