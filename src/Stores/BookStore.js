import { observable, action } from 'mobx';
import axios from 'axios'

class BookStore {
    @observable books = [];
    @observable selectedBook = {};
    @observable searchString = {};

    @action setSearchString = (searchString) => { this.searchString = searchString; } 

    @action getBooks() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchString)
        .then(res => {
            this.books =  res.data.items ;
        })
    }

    @action selectBook(bookId) {
        let link = 'https://www.googleapis.com/books/v1/volumes/' + bookId;
        axios.get(link)
            .then(res => {
                this.selectedBook = res.data.volumeInfo;
            })
    }
}

const store = new BookStore();

export default store;
export { BookStore };
