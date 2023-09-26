import { Types } from "mongoose";
import { Book } from "../books/books.model";
//import { IBook } from "../books/books.interface";

//! Create comment Service
const createcomment = async (bookId: Types.ObjectId, comment: string) => {
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      return { success: false, message: 'Book not found.' };
    }

    book.comments = book.comments || []; 
    book.comments.push(comment);

    const result = await book.save();
    return result;
  } catch (error) {
    console.error('Error adding comment:', error);
    return { success: false, message: 'An error occurred while adding the comment.' };
  }
};

//!Get comments Service
const getComment = async (bookId: Types.ObjectId) => {
  const result = await Book.findOne(
    { _id: bookId },
    {_id:0, comments: 1 }
  
  );
  
  return result as { comments: string[] };
};

export const ReviewService = {
    createcomment,
    getComment
};