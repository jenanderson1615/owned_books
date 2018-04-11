import React from 'react';

class BookDetail extends React.Component {    
    render() {
        return (
            <div>
                <div>{this.props.title}</div>
                <div>{this.props.author}</div>
                <div>{this.props.description}</div>
            </div>
        );
    }
}

export default BookDetail