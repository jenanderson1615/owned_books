import React from 'react';
import AppBar from 'material-ui/AppBar'
import Link from 'react-router-dom/Link'
import { List, ListItem } from 'material-ui';
import {observer} from 'mobx-react';

const titleStyle = {
    textAlign: "center",
};

const listStyle = {
    textAlign: "center",
};

@observer class OwnedBooksDashboard extends React.Component {  
    componentDidMount() {
        this.props.store.getBooks();
    }
    
    render() {
        const bookLinks = this.props.store.books.map((book) => (
            <ListItem key={book.id}>
                <Link to={`/book_detail/${book.id}`} onClick={ () => {this.props.store.selectBook(book)} }>{book.volumeInfo.title}</Link>
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
