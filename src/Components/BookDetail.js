import React from 'react';
import AppBar from 'material-ui/AppBar'
import Link from 'react-router-dom/Link'
import RaisedButton from 'material-ui/RaisedButton'

const titleStyle = {
    textAlign: "center",
};

class BookDetail extends React.Component {
    componentDidMount() {
        this.props.store.selectBook(this.props.match.params.id);
    }

    render() {
        var book = this.props.store.selectedBook;
        return (
            <div>
                <AppBar
                    title="Book Details"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                />
                {this.props.store.selectedBook && <BookDetails book={this.props.store.selectedBook} />}
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