// books.model.ts

import mongoose, { model} from 'mongoose';
import { BooksModel, IBook } from './books.interface';

const BookSchema = new mongoose.Schema<IBook, BooksModel>(
    {
      title: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
      image: {
        type: String,
        required: true,
      },
      genre: {
        type: String,
        required: true,
      },
      publicationDate: {
        type: String,
        required: true,
      },
      summary: {
        type: String,
        required: true,
      },
      comments: {
        type: [String],
        required: false,
      },
      addedBy: {
        type: String,
        required: true,
      },
    },
    {
      timestamps: true,
      toJSON: {
        virtuals: true,
      },
    },
  );


export const Book = model<IBook, BooksModel>('Books', BookSchema);
