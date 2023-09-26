"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksRoutes = void 0;
const express_1 = __importDefault(require("express"));
const books_controller_1 = require("./books.controller");
const router = express_1.default.Router();
router.post('/create-books', books_controller_1.BookController.createBooks);
router.get('/:id', books_controller_1.BookController.getSingleBook);
router.delete('/:id', books_controller_1.BookController.deleteBook);
router.patch('/:id', books_controller_1.BookController.updateBook);
router.get('/', books_controller_1.BookController.getAllBooks);
exports.BooksRoutes = router;
