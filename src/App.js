import React from "react";
import {Routes, Route} from "react-router-dom";
import HeaderContainer from "./components/Header/HeaderContainer";
import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import './App.css';





const App = (props) => {

    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<DialogsContainer/>}/>
                    <Route path='/profile'
                           element={<ProfileContainer/>}>
                        <Route path=':profileId'
                               element={<ProfileContainer/>}/>
                        </Route>
                    <Route path='/users'
                           element={<UsersContainer/>}/>

                </Routes>
            </div>
        </div>

    )
}

export default App;
