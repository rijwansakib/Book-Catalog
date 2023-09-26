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
exports.BookService = void 0;
const books_model_1 = require("./books.model");
//!create book
const createBooks = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.create(payload);
    return result;
});
//!get all books
const getAllBooks = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.find();
    return result;
});
//!get single book
const getSingleBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.findById(id);
    return result;
});
//!update books
const updateBook = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.findOneAndUpdate({ _id: id }, payload, {
        new: true,
    });
    return result;
});
//!Delete Book
const deleteBook = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield books_model_1.Book.findByIdAndDelete(id);
    return result;
});
exports.BookService = {
    createBooks,
    getAllBooks,
    getSingleBook,
    updateBook,
    deleteBook,
};
