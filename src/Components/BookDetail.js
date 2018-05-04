import React from 'react';
import AppBar from 'material-ui/AppBar'
import Link from 'react-router-dom/Link'
import RaisedButton from 'material-ui/RaisedButton'
import axios from 'axios';

const titleStyle = {
    textAlign: "center",
};

class BookDetail extends React.Component {

    state = {
        book: []
    }

    componentDidMount() {
        let bookId = this.props.match.params.id
        let link = 'https://www.googleapis.com/books/v1/volumes/' + bookId;
        axios.get(link)
            .then(res => {
                const book = res.data.volumeInfo;
                console.log(book);
                this.setState({ book });
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
            <div>{book.authors}</div>
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