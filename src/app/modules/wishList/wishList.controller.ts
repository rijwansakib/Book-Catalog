import { Request, Response } from 'express';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IWish } from './wishList.interface';
import { wishListService } from './wishList.service';

const createWish = catchAsync(async (req: Request, res: Response) => {
  const {...wishData} = req.body;

  const result = await wishListService.createWish(wishData);
  sendResponse<IWish>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'wishList created successfully!',
    data: result,
  });
});

const getWishList = catchAsync(async (req: Request, res: Response) => {
  const result = await wishListService.getWishList();
  sendResponse<IWish[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Get wishList successfully !',
    data: result,
  });
});


const deleteWish = catchAsync(async (req: Request, res: Response) => {
  const _id = req.params.id;
  const result = await wishListService.deleteWish(_id);

  sendResponse<IWish>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'wishList deleted successfully !',
    data: result,
  });
});


export const wishListController ={
    createWish,
    getWishList,
    deleteWish

  }