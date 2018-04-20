import React from 'react';
import AppBar from 'material-ui/AppBar'
import Link from 'react-router-dom/Link'
import RaisedButton from 'material-ui/RaisedButton'
import books from '../Books';

const titleStyle = {
    textAlign: "center",
};

class BookDetail extends React.Component {

    state = {
        book: null
    }

    componentDidMount() {
        let isbn = this.props.match.params.isbn;
        let book = books.find((b) => b.isbn == isbn);
        this.setState({
            book: book
        })
    }

    render() {

        let { book } = this.state;

        return (
            <div>
                <AppBar
                    title="Book Details"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                />
                {book && <BookDetails book={book} />}
            </div>
        );
    }
}

const BookDetails = ({ book }) => {
	
    return (
        <div style={titleStyle}>
            <div>{book.title}</div>
            <div>{book.author}</div>
            <div>{book.description}</div>
            <Link to={'/'}>
                <RaisedButton> Back </RaisedButton>
            </Link>
            {'   '}
            <Link to={'/'}>
                <RaisedButton> Delete </RaisedButton>
            </Link>
        </div>
  )
}

export default BookDetail