import { IBook } from '../interfaces/IBook';
import mongoose from 'mongoose';

const Book = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please enter a full name'],
            index: true,
        },
        year: {
            type: Number,
            required: [true, 'Please enter the year'],
            index: true,
        }
    },
    { timestamps: true },
);

export default mongoose.model<IBook & mongoose.Document>('Book', Book);
