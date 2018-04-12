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
                <form style={titleStyle}>
                    <div>
                        Title:{'    '}
                    <input type='text' name='title'/>
                    </div>
                    <div>
                        Author:{'    '}
                    <input type='text' name='author'/>
                    </div>
                    <div>
                        Description:{'    '}
                    <input type='text' name='description'/>
                    </div>
                    <div>
                        <Link to={'/'}>
                            <RaisedButton> Back </RaisedButton>
                        </Link>
                        {'   '}
                        <Link to={'/'}>
                            <RaisedButton> Add </RaisedButton>
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default AddBook