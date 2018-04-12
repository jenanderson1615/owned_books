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
    state = {
        books: [
            {
                title: 'Windows 98 in a Nutshell (In a Nutshell)',
                author: 'Tim Reilly',
                description: "Windows 98 in a Nutshell is a comprehensive, compact reference that systematically unveils what serious users of Windows 98 will find interesting and useful. Little known details of the operating system, utility programs, and configuration settings are all captured in a consistent reference format."
            },
            {
                title: 'WTF?: What\'s the Future and Why It\'s Up to Us',
                author: 'Tim Reilly',
                description:"WTF? can be an expression of amazement or an expression of dismay. In today’s economy, we have far too much dismay along with our amazement, and technology bears some of the blame. In this combination of memoir, business strategy guide, and call to action, Tim O'Reilly, Silicon Valley’s leading intellectual and the founder of O’Reilly Media, explores the upside and the potential downsides of today's technologies.", 
            },
        ],
    };  
    
    render() {
        return (
            <div>
                <AppBar
                    title="Owned Books"
                    titleStyle={titleStyle}
                    showMenuIconButton={false}
                    iconElementRight={<PlusButton/>}
                />
                <BookList books={this.state.books} />
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