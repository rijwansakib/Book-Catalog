"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewService = void 0;
const books_model_1 = require("../books/books.model");
//! Create comment Service
const createcomment = (bookId, comment) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield books_model_1.Book.findById(bookId);
        if (!book) {
            return { success: false, message: 'Book not found.' };
        }
        book.comments = book.comments || [];
        book.comments.push(comment);
        const result = yield book.save();
        return result;
    }
    catch (error) {
        console.error('Error adding comment:', error);
        return { success: false, message: 'An error occurred while adding the comment.' };
    }
});
//!Get comments Service
const getComment = (bookId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.findOne({ _id: bookId }, { _id: 0, comments: 1 });
    return result;
});
exports.ReviewService = {
    createcomment,
    getComment
};
