import React, { Component } from 'react';
import './App.css';
import OwnedBooksDashboard from './Components/OwnedBooksDashboard';
import { Switch, Route } from 'react-router-dom'
import AddBook from './Components/AddBook';
import BookDetail from './Components/BookDetail';
import store from './Stores/BookStore';

class App extends Component {
  render() {
    return (
      <div>
         <Paths />
      </div>
    );
  }
}

const Paths = () => (
  <Switch>
    <Route exact path='/' render={(props) => <OwnedBooksDashboard {...props} store={store} />} />
    <Route exact path='/add_book' component={AddBook} />
    <Route exact path='/book_detail/:id' render={(props) => <BookDetail {...props} store={store} />} />

  </Switch>
)

export default App;

