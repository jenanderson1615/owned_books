import React, { Component } from 'react';
import './App.css';
import OwnedBooksDashboard from './Components/OwnedBooksDashboard';
import { Switch, Route } from 'react-router-dom'
import AddBook from './Components/AddBook';
import BookDetail from './Components/BookDetail'

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
    <Route exact path='/' component={OwnedBooksDashboard} />
    <Route exact path='/add_book' component={AddBook} />
    <Route exact path='/book_detail' component={OwnedBooksDashboard} />
    <Route path='/book_detail/:id' component={BookDetail} />

  </Switch>
)

export default App;

