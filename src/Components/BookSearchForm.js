import React from "react";
import TextField from '@material-ui/core/TextField';
import { Button } from "@material-ui/core";

class BookSearchForm extends React.Component {
  render() {
    return (
    <div>
        
      <TextField
        id="search"
        label="Search field"
        type="search"
        onChange={
            this.handleChange()
          }
      />
      <Button onClick={() => {
            this.onRequestSearch();
          }}>Search</Button>
      </div>
    );
  }

  handleChange = () => event => {
    this.props.bookStore.setSearchString(event.target.value);
  };

  onRequestSearch() {
    this.props.bookStore.getBooks();
  }
}

export default BookSearchForm;
