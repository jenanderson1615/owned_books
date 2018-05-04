import { observable, action } from 'mobx';
import axios from 'axios'

class BookStore {
    @observable books = [];
    @observable selectedBook = {};

    @action selectBook = (book) => {
        this.selectedBook = book;
        console.log(this.selectedBook);
    }

    @action getBooks() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers`)
        .then(res => {
            this.books =  res.data.items ;
        })
    }
}

const store = new BookStore();

export default store;
export { BookStore };