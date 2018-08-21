import React from 'react';
import AppBar from 'material-ui/AppBar'
import Link from 'react-router-dom/Link'
import { List, ListItem } from 'material-ui';
import axios from 'axios';


const titleStyle = {
    textAlign: "center",
};

const listStyle = {
    textAlign: "center",
};

class OwnedBooksDashboard extends React.Component {  
    componentDidMount() {
        this.props.bookStore.bookStore.getBooks();
    }
    
    render() {
        const bookLinks = this.props.bookStore.bookStore.books.map((book) => (
            <ListItem key={book.id}>
                <Link to={`/book_detail/${book.id}`}>{book.volumeInfo.title}</Link>
            </ListItem>           
        ));

        return (
            <div>
                <AppBar
                    title="Owned Books"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                />
                <List style={listStyle}> 
                    {bookLinks}
                </List>
            </div>
        );
    }
}

export default OwnedBooksDashboard
