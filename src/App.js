import React from "react";
import {Routes, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import './App.css';
import store from "./redux/state";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs'
                           element={<Dialogs store={props.store} />}/>
                    <Route path='/profile'
                           element={<Profile profilePage={props.state.profilePage}
                                             dispatch={props.dispatch}
                                             />}/>
                </Routes>
            </div>
        </div>

    )
}

export default App;
