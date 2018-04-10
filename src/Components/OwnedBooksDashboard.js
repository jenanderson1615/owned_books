import React from 'react';
import BookList from './BookList'

class OwnedBooksDashboard extends React.Component {    
    render() {
        return (
            <div>
                <u>Owned Books: </u>
                <BookList />
            </div>
        );
    }
}

export default OwnedBooksDashboard