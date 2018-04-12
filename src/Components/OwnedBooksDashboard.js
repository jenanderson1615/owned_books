import React from 'react';
import BookList from './BookList'
import AppBar from 'material-ui/AppBar'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'
import Link from 'react-router-dom/Link'

const titleStyle = {
    textAlign: "center",
};

class OwnedBooksDashboard extends React.Component {    
    render() {
        return (
            <div>
                <AppBar
                    title="Owned Books"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                    iconElementRight={<PlusButton/>}
                />
                <BookList />
            </div>
        );
    }
}

const PlusButton = () => {
    return (
        <Link to={'/add_book'}>
            <FloatingActionButton>
                <ContentAdd />
            </FloatingActionButton>
        </Link>
    )
}

export default OwnedBooksDashboard