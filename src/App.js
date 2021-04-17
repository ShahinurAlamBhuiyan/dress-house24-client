import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login'
import { createContext, useEffect } from 'react';
import { useState } from 'react';
import PrivateRoute from './components/Shared/PrivateRoute/PrivateRoute';
import Book from './components/Dashboard/Book/Book';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';

export const UserContext = createContext()

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [token, setToken] = useState(null);
  useEffect(() => {
    const store = sessionStorage.getItem('token');
    if (store) {
      setToken(store)
    }
    const USER = JSON.parse(sessionStorage.getItem('user'));
    if (USER) {
      setLoggedInUser(USER)
    }
  }, [])

  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser, token, setToken]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <PrivateRoute path="/book/:_id">
              <Book />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
