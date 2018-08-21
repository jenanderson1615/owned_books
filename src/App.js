import React, { Component } from 'react';
import './App.css';
import OwnedBooksDashboard from './Components/OwnedBooksDashboard';
import { Switch, Route } from 'react-router-dom'
import AddBook from './Components/AddBook';
import BookDetail from './Components/BookDetail';
import BookSearchForm from './Components/BookSearchForm';

class App extends Component {
  render() {
    return (
      <div>
         <Paths bookStore={this.props.bookStore}/>
      </div>
    );
  }
}

const Paths = (bookStore) => (
  <Switch>
    <Route exact path='/book_detail' render={(props) => <OwnedBooksDashboard bookStore={bookStore} />} />
    <Route exact path='/' render={(props) => <BookSearchForm bookStore={bookStore} />} />
    <Route exact path='/add_book' component={AddBook} />
    <Route exact path='/book_detail/:id' render={(props) => <BookDetail bookStore={bookStore} />} />

  </Switch>
)

export default App;

