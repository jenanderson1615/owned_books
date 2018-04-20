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
        let {books} = this.state;

        const bookLinks = books.map((book) => (
            <ListItem>
                <Link to={`/book_detail/${book.isbn}`}>{book.title}</Link>
            </ListItem>    
        ));

        return (
            <div>
                <List style={listStyle}>
                    {bookLinks}
                </List>
            </div>
        );
        
    }
}

export default BookList