import React from 'react';
import Book from './Book'
import { List, ListItem } from 'material-ui';

const listStyle = {
    textAlign: "center",
};

class BookList extends React.Component {  
    render() {
        const books = this.props.books.map((book) => (
            <ListItem>
                <Book 
                    title = {book.title}
                    author = {book.author}
                    description = {book.description}
                />
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