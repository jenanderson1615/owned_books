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
                    <ListItem children={<Book title={'Full Stack React'}/>} />
                </List>
            </div>
        );
    }
}

export default BookList