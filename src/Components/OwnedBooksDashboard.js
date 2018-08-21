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

class OwnedBooksDashboard extends React.Component {  
    render() {
        const bookLinks = this.props.bookStore.books.map((book) => (
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
                {(this.props.bookStore.books.length > 0) &&
                <List style={listStyle}> 
                    {bookLinks}
                </List>}
            </div>
        );
    }
}

export default observer(OwnedBooksDashboard)
