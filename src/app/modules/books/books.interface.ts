import mongoose, { Model } from 'mongoose';

export type IBook = {
  id: mongoose.Types.ObjectId;
  title: string;
  author: string;
  genre: string;
  image: string;
  publicationDate: string;
  summary: string;
  comments?: string[];
  addedBy: string;
};
export type BooksModel = Model<IBook ,Record<string,unknown>>;
