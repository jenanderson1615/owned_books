import React from 'react';
import Link from 'react-router-dom/Link';
import Route from 'react-router-dom/Route';
import BookDetail from './BookDetail'

class Book extends React.Component {    
    render() {
        return (
            <div>
                <Route path='/book_detail' render={(props) => <BookDetail {...props} title={this.props.title} author={'IDK'} description={'my description'} />}/>
                <Link to={'/book_detail'}>{this.props.title}</Link>
            </div>
        );
    }
}

export default Book