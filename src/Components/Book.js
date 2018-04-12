import React from 'react';
import Link from 'react-router-dom/Link';

class Book extends React.Component {    
    render() {
        return (
            <div>
                <Link to={'/book_detail'}>{this.props.title}</Link>
            </div>
        );
    }
}

export default Book