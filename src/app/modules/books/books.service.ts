import { IBook } from './books.interface';
import { Book } from './books.model';

//!create book
const createBooks = async (payload: IBook): Promise<IBook> => {
  const result = await Book.create(payload);
  return result;
};


//!get all books
const getAllBooks = async (): Promise<IBook[]> => {
  const result = await Book.find();

  return result;
};

//!get single book
const getSingleBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findById(id);
  return result;
};

//!update books
const updateBook = async (
  id: string,
  payload: Partial<IBook>,
): Promise<IBook | null> => {
  const result = await Book.findOneAndUpdate({ _id: id }, 
    payload,{
    new: true,
  });
  return result;
};

//!Delete Book
const deleteBook = async (id: string): Promise<IBook | null> => {
  const result = await Book.findByIdAndDelete(id);
  return result;
};

export const BookService = {
  createBooks,
  getAllBooks,
  getSingleBook,
  updateBook,
  deleteBook,
};