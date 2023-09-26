import { Model, Types } from 'mongoose';
import { IBook } from '../books/books.interface';

export type IReview = {
    book:Types.ObjectId | IBook;
    comment: string;
};

export type ReviewModel = Model<IReview ,Record<string,unknown>>;