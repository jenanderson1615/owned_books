import React, { Component } from 'react';
import './App.css';
import OwnedBooksDashboard from './Components/OwnedBooksDashboard';
import { Switch, Route } from 'react-router-dom'
import BookDetail from './Components/BookDetail'
import AddBook from './Components/AddBook';

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
    <Route path='/book_detail' render={(props) => <BookDetail {...props} title={"Full Stack React"} author={'IDK'} description={'my description'} />} />
    <Route path='/add_book' component={AddBook} />
  </Switch>
)

export default App;
