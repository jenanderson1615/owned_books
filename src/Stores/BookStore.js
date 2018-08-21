import { types, flow } from "mobx-state-tree";
import axios from 'axios'
import Book from "./BookModel";

const BookStore = types
  .model({
    books: types.optional(types.array(Book), []),
    selectedBook: types.maybe(Book),
    searchString: types.maybe(types.string)
  })
  .actions(self => {
    return {
    setSearchString(searchString) {
        self.searchString = searchString
      },

      getBooks: flow(function*() {
        try {
          let link = `https://www.googleapis.com/books/v1/volumes?q=` + self.searchString;
          let books = yield axios.get(link);
          self.books = books.data.items;
        } catch (error) {
          console.log("Error fetching books", error);
        }
      }),

      selectBook: flow(function*(bookId) {
        let link = 'https://www.googleapis.com/books/v1/volumes/' + bookId;
        let book = yield axios.get(link);
        self.selectedBook = book.data;
      })
    };
  });
export default BookStore;
