import React from 'react';
import BookList from './BookList'
import AppBar from 'material-ui/AppBar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Link from 'react-router-dom/Link'
import axios from 'axios'

const titleStyle = {
    textAlign: "center",
};

class OwnedBooksDashboard extends React.Component {  
    state = {
        books: []
    }; 

    componentDidMount() {
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes`)
            .then(res => {
                const books = res.data;
                this.setState({ books });
            })
    }
    
    render() {
        return (
            <div>
                <AppBar
                    title="Owned Books"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                    iconElementRight={<PlusButton/>}
                />
                <BookList books={this.state.books.items} /> 
            </div>
        );
    }
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