import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { ReviewService } from "./review.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import {Types } from "mongoose";
import { IBook } from "../books/books.interface";

//! create comment controller
const createComment = catchAsync(async (req: Request, res: Response) => {
  const bookId = new Types.ObjectId(req.params.id);
  const comment = req.body.comment; 

  const result = await ReviewService.createcomment(bookId, comment);

    sendResponse<IBook>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Comment created successfully!',
      ...result, 
    });
});


//! Get comments comtroller

const getComment = catchAsync(async(req:Request,res:Response) => {
  const bookId = new Types.ObjectId(req.params.id);
  const result = await ReviewService.getComment(bookId)
  sendResponse<IBook[]>(res,{
    statusCode: httpStatus.OK,
    success: true,
    message: 'Comments fetched successfully!',
    data: {
      comments: result.comments,
    },
  })
});


 export const ReviewController ={
  createComment,
  getComment
}