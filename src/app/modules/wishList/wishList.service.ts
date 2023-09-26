delete require.cache[require.resolve('../books/books.model.ts')]; // Replace with the path to your model file
import { IWish } from './wishList.interface';
import { Wish } from './wishList.model';

const createWish = async (payload: IWish) => {
  const existingWish = await Wish.findOne({
    bookId: payload.bookId,
    userEmail: payload.userEmail,
  });

  if (existingWish) {
    throw new Error('Wish with the same bookId and userEmail already exists');
  }
  const result = (await Wish.create(payload)).populate('bookId');
  return result;
};

const getWishList = async (): Promise<IWish[]> => {
  const result = await Wish.find().populate('bookId')
  return result;
};

const deleteWish = async (id: string): Promise<IWish | null> => {
  const result = await Wish.findByIdAndDelete(id)
  return result;
};

export const wishListService = {
  createWish,
  getWishList,
  deleteWish,
};
