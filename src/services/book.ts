import {Inject, Service} from "typedi";
import {IBookDTO} from "interfaces";

@Service()
export class BookService {
    constructor(
        @Inject('BookModel') private bookModel,
        @Inject('wss') private wss
    ) {}

    public getAllBooks = async () => {
        return {status: 'ok'}
    }

    public insertBook = async (data: IBookDTO) => {
        // const book = await this.bookModel.create(data)
        // return {...book._doc}
    }
}
