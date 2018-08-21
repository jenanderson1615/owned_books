import React from 'react';
import AppBar from 'material-ui/AppBar'
import Link from 'react-router-dom/Link'
import RaisedButton from 'material-ui/RaisedButton'

const titleStyle = {
    textAlign: "center",
};

class BookDetail extends React.Component {
    componentDidMount() {
        this.props.bookStore.bookStore.selectBook(this.props.match.params.id);
    }

    render() {
        var book = this.props.bookStore.bookStore.selectedBook;
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
            <div>{book.volumeInfo.title}</div>
            <div>{book.volumeInfo.description}</div>
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