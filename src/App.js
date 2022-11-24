import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = (props) => {
  return (
      <Router>
          <Routes>
  <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
          <Route path='/dialogs' element={Dialogs}/>
          <Route path='/profile' element={Profile}/>
          <Route path='/header' element={Header}/>
          <Route path='/navbar' element={Navbar}/>
      </div>
  </div>
          </Routes>
      </Router>
  )
}

export default App;
