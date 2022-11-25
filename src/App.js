import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  return (

      <div className='app-wrapper'>
      <Header/>
      <Navbar/>
      <div className='app-wrapper-content'>
          <Routes>
          <Route path='/dialogs' element={<Dialogs />}/>
          <Route path='/profile' element={<Profile />}/>
          <Route path='/header' element={<Header />}/>
          <Route path='/navbar' element={<Navbar />}/>
      </Routes>
      </div>
  </div>

  )
}

export default App;
