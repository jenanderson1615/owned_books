import React from 'react';
import Book from './Book'
import { List, ListItem } from 'material-ui';

const listStyle = {
    textAlign: "center",
};

class BookList extends React.Component {    
    render() {
        return (
            <div>
                <List style={listStyle}>
                    <ListItem> <Book title={'Full Stack React'}/> </ListItem>
                </List>
            </div>
        );
    }
}

export default BookList