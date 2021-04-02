import React from "react";
import { BrowserRouter, Switch,Route } from "react-router-dom";
import './App.css';
import Login from '../src/componets/Login'
import Home from "./pages/Home";
import Technology from "./pages/category/Technology";
import Profile from "./pages/user/Profile";
import Books from "./pages/user/Books";
import Outofdate from './pages/user/Outofdate';
import Waiting from "./pages/user/Waiting";
import Waitingborrow from "./pages/user/Waitingborrow";
import Addbooks from "./pages/user/Addbooks";
import Borrowpage from "./pages/user/Borrowpage";
import Confrim from "./pages/user/Confrim";
import Description from './pages/Description'
import List from "./componets/List";
import axios from 'axios';
axios.defaults.baseURL = 'https://restfullbooks.herokuapp.com/'

function App() {
  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route path="/login" component={Login}/>
    <Route path="/technology" component={Technology}/>
    <Route path="/profile" component={Profile}/>
    <Route path="/books" component={Books}/>
    <Route path="/outofdate" component={Outofdate}/>
    <Route path="/description/:id" component={Description}/>
    <Route path="/waiting" component={Waiting}/>
    <Route path="/waitingborrow" component={Waitingborrow}/>
    <Route path="/addbook" component={Addbooks}/>
    <Route path="/borrow" component={Borrowpage}/>
    <Route path="/confrim" component={Confrim}/>
    <Route path="/list" component={List}/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
