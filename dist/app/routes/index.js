"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const books_route_1 = require("../modules/books/books.route");
const review_route_1 = require("../modules/review/review.route");
const wishList_route_1 = require("../modules/wishList/wishList.route");
const router = express_1.default.Router();
const moduleRoutes = [
    {
        path: '/books',
        route: books_route_1.BooksRoutes
    },
    {
        path: '/review',
        route: review_route_1.ReviewRoutes
    },
    {
        path: '/wishlist',
        route: wishList_route_1.WishRoute
    },
];
moduleRoutes.forEach(route => router.use(route.path, route.route));
exports.default = router;
