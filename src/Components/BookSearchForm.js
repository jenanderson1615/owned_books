import React from "react";
import TextField from '@material-ui/core/TextField';
import OwnedBooksDashboard from "./OwnedBooksDashboard";

class BookSearchForm extends React.Component {
  render() {
    return (
    <div>
      <TextField
        id="search"
        label="Search field"
        type="search"
        onChange={() => {
            this.onRequestSearch();
          }}
      />
      </div>
    );
  }

  onRequestSearch() {
    this.props.bookStore.bookStore.setSearchString();
  }
}

export default BookSearchForm;
