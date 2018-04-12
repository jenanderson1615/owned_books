import React from 'react';
import AppBar from 'material-ui/AppBar' 
import RaisedButton from 'material-ui/RaisedButton'
import Link from 'react-router-dom/Link'

const titleStyle = {
    textAlign: "center",
};

class AddBook extends React.Component {    
    render() {
        return (
            <div>
                <AppBar
                    title="Add a Book"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                />
                <form>
                    <div> Title </div>
                    <div> Author </div>
                    <div> Description </div>
                    <Link to={'/'}>
                        <RaisedButton> Back </RaisedButton>
                    </Link>
                    <Link to={'/'}>
                        <RaisedButton> Add </RaisedButton>
                    </Link>
                </form>
            </div>
        );
    }
}

export default AddBook