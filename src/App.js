import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import './App.css';
import Login from "./components/Login/Login";





const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path="/" element={<Navigate to="/profile" />} />
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>
                    <Route path='/profile'
                           element={<ProfileContainer/>}>
                        <Route path=':profileId'
                               element={<ProfileContainer/>}/>
                        </Route>
                    <Route path='/users'
                           element={<UsersContainer/>}/>
                    <Route path='/login'
                            element={<Login/>}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
