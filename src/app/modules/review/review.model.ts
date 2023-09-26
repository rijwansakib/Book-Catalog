import  { Schema, model } from "mongoose";
import { IReview, ReviewModel } from "./review.interface";

export const ReviewSchema = new Schema<IReview,ReviewModel>({
    comment: {
        type: String,
        required: true
    },
    book:{
        type: Schema.Types.ObjectId,
        ref: "Book",
        required: true
    },
},{
    timestamps:true,
    toJSON:{
        virtuals:true
    }
})

export const Review = model <IReview, ReviewModel>('Review',ReviewSchema)