import express from 'express';
import { wishListController } from './wishList.controller';

const router = express.Router();

router.post('/create-wishlist', wishListController.createWish);
router.get('/', wishListController.getWishList);
router.delete('/:id', wishListController.deleteWish);
export const WishRoute = router;
