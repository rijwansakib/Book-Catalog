import { IWish, IWishModel } from './wishList.interface';
import mongoose, { Schema } from 'mongoose';

const wishSchema = new Schema<IWish, IWishModel>({
  bookId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Books',
      required: true,
    },
  ],
  userEmail: {
    type: String,
    required: true,
  },
});

export const Wish = mongoose.model<IWish, IWishModel>('Wish', wishSchema);
