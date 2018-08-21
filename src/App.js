import React, { Component } from "react";
import "./App.css";
import OwnedBooksDashboard from "./Components/OwnedBooksDashboard";
import { Switch, Route } from "react-router-dom";
import BookDetail from "./Components/BookDetail";
import BookSearchForm from "./Components/BookSearchForm";

class App extends Component {
  render() {
    return (
      <div>
        <BookSearchForm bookStore={this.props.bookStore} />
        <OwnedBooksDashboard bookStore={this.props.bookStore} />
        <Paths bookStore={this.props.bookStore} />
      </div>
    );
  }
}

const Paths = bookStore => (
  <Switch>
    <Route
      exact
      path="/book_detail/:id"
      render={(props) => <BookDetail {...props} bookStore={bookStore}/>}
    />
  </Switch>
);

export default App;
