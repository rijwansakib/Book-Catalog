"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WishRoute = void 0;
const express_1 = __importDefault(require("express"));
const wishList_controller_1 = require("./wishList.controller");
const router = express_1.default.Router();
router.post('/create-wishlist', wishList_controller_1.wishListController.createWish);
router.get('/', wishList_controller_1.wishListController.getWishList);
router.delete('/:id', wishList_controller_1.wishListController.deleteWish);
exports.WishRoute = router;
