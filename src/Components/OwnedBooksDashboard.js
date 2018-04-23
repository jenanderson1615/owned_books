import React from 'react';
import AppBar from 'material-ui/AppBar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Link from 'react-router-dom/Link'
import axios from 'axios'
import { List, ListItem } from 'material-ui';

const titleStyle = {
    textAlign: "center",
};

const listStyle = {
    textAlign: "center",
};

class OwnedBooksDashboard extends React.Component {  
    state = {
        books: []
    }; 

    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`)
            .then(res => {
                const books = res.data.items;
                this.setState({ books });
            })
    }
    
    render() {
        const bookLinks = this.state.books.map((book) => (
            <div>
                <BookListItem id={book.id} title={book.volumeInfo.title} />      
            </div>    
        ));

        return (
            <div>
                <AppBar
                    title="Owned Books"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                    iconElementRight={<PlusButton/>}
                />
                <List style={listStyle}> 
                    {bookLinks}
                </List>
            </div>
        );
    }
}

const BookListItem = ({ id, title }) => {
    return (
        <div>
            <ListItem>
                 <Link to={`/book_detail/${id}`}>{title}</Link>
            </ListItem>    
        </div>
  )
}

const PlusButton = () => {
    return (
        <Link to={'/add_book'}>
            <FloatingActionButton>
                <ContentAdd />
            </FloatingActionButton>
        </Link>
    )
}

export default OwnedBooksDashboard