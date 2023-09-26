import { Model, Types } from "mongoose";
import { IBook } from "../books/books.interface";
export type IWish={
    bookId:Types.ObjectId | IBook;
    userEmail:string
}
export type IWishModel = Model<IWish ,Record<string,unknown>>;