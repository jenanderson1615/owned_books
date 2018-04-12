import React from 'react';
import AppBar from 'material-ui/AppBar'
import Link from 'react-router-dom/Link'
import RaisedButton from 'material-ui/RaisedButton'

const titleStyle = {
    textAlign: "center",
};

class BookDetail extends React.Component {
    render() {
        return (
            <div>
                <AppBar
                    title="Book Details"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                />
                <div style={titleStyle}>
                    <div>{this.props.title}</div>
                    <div>{this.props.author}</div>
                    <div>{this.props.description}</div>
                    <Link to={'/'}>
                        <RaisedButton> Back </RaisedButton>
                    </Link>
                    {'   '}
                    <Link to={'/'}>
                        <RaisedButton> Delete </RaisedButton>
                    </Link>
                </div>
            </div>
        );
    }
}

export default BookDetail