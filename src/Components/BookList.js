import React from 'react';
import { List, ListItem } from 'material-ui';
import Link from 'react-router-dom/Link';

const listStyle = {
    textAlign: "center",
};

class BookList extends React.Component {  

    constructor(props) {
        super(props);
        this.state = {
            books: props.books
        }
    }

    render() {
        let { books } = this.props;
        // Object.keys(books).map((book) => (
        //     console.log(book[key]),
        //     console.log(book[key])
        // ));
        for (var book in books) {
            var bookObject = books[book];
            console.log(bookObject['volumeInfo']);
        }
        // const bookLinks = books.map((book) => (
        //     <div>
        //     <h1>{book.totalItems}</h1>
        //         {/* <ListItem>
        //             <Link to={`/book_detail/${book.id}`}>{book.title}</Link>
        //         </ListItem>     */}
        //     </div>    
        // ));

        return (
            <div>
                Book List
                {/* <List style={listStyle}>
                    {bookLinks}
                </List> */}
            </div>
        );
        
    }
}

export default BookList