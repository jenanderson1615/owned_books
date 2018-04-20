import React, { Component } from 'react';
import './App.css';
import OwnedBooksDashboard from './Components/OwnedBooksDashboard';
import { Switch, Route } from 'react-router-dom'
import AddBook from './Components/AddBook';
import BookList from './Components/BookList';
import BookDetail from './Components/BookDetail'

class App extends Component {
  render() {
    return (
      <div>
         <Paths />
        {/**yes but always there */ }
        {/* <span>does this work</span> */}
      </div>
    );
  }
}

const Paths = () => (
  <Switch>
    <Route exact path='/' component={OwnedBooksDashboard} />
    <Route exact path='/add_book' component={AddBook} />
    <Route exact path='/book_detail' component={BookList} />
    {/* <Route exact path='/book_detail/:id' component={BookDetail} /> */}
    <Route path='/book_detail/:id' render={(props) => <BookDetail {...props} title={"Full Stack React"} author={'IDK'} description={'my description'} />} />

  </Switch>
)

export default App;

