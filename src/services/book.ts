import {Service, Inject, Container} from "typedi";
import {IBookDTO} from "interfaces";

@Service()
export class BookService {
    constructor(
        @Inject('BookModel') private bookModel
    ) {
    }

    public insertBook = async (data: IBookDTO) => {
        const book = await this.bookModel.create(data)
        return {...book._doc}
    }
}
