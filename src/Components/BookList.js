import React from 'react';
import { List, ListItem } from 'material-ui';
import Switch from 'react-router-dom/Switch';
import Route from 'react-router-dom/Route';
import BookDetail from './BookDetail';
import Link from 'react-router-dom/Link';
import OwnedBooksDashboard from './OwnedBooksDashboard'

const listStyle = {
    textAlign: "center",
};

class BookList extends React.Component {  
    render() {
        const books = this.props.books.map((book) => (
            <ListItem>
                <Route exact path='/book_detail/:isbn' render={(props) => <BookDetail {...props} title={book.title} author={book.author} description={book.description} isbn={book.isbn} />} />
                <Link to={`/book_detail/${book.isbn}`}>{book.title}</Link>
            </ListItem>    
        ));

        return (
            <div>
                <List style={listStyle}>
                    {books}
                </List>
            </div>
        );
        
    }
}

export default BookList