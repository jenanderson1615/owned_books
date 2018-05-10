import React from 'react';
import SearchBar from 'material-ui-search-bar'
import OwnedBooksDashboard from './OwnedBooksDashboard';
import {observer} from 'mobx-react';

@observer class BookSearchForm extends React.Component {
    render() {
        return (
            <SearchBar
                onChange={() => console.log()}
                onRequestSearch={this.onRequestSearch}
                style={{
                    margin: '0 auto',
                    maxWidth: 800
                }}
            />
        )
    }

    onRequestSearch() {
        console.log(this.props.store);
        <OwnedBooksDashboard store={this.props.store}/>
    }
}

export default BookSearchForm