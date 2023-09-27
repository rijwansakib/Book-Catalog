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
exports.wishListService = void 0;
delete require.cache[require.resolve('../books/books.model.js')]; // Replace with the path to your model file
const wishList_model_1 = require("./wishList.model");
const createWish = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const existingWish = yield wishList_model_1.Wish.findOne({
        bookId: payload.bookId,
        userEmail: payload.userEmail,
    });
    if (existingWish) {
        throw new Error('Wish with the same bookId and userEmail already exists');
    }
    const result = (yield wishList_model_1.Wish.create(payload)).populate('bookId');
    return result;
});
const getWishList = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_model_1.Wish.find().populate('bookId');
    return result;
});
const deleteWish = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield wishList_model_1.Wish.findByIdAndDelete(id);
    return result;
});
exports.wishListService = {
    createWish,
    getWishList,
    deleteWish,
};
