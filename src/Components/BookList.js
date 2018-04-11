import React from 'react';
import Book from './Book'

class BookList extends React.Component {    
    render() {
        return (
            <div>
                <Book title={'Full Stack React'}/>
            </div>
        );
    }
}

export default BookList