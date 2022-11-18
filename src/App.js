import React from "react";
import './App.css';

const App = () => {
  return (
  <div className='app-wrapper'>
<header className='header'>
  <img src='https://png.pngitem.com/pimgs/s/32-326322_linkedin-logo-white-letters-png-download-transparent-png.png'/>
</header>
    <nav className='nav'>
      <div>
        <a>Profile</a>
      </div>
        <div>
            <a>Messages</a>
        </div>
        <div>
            <a>News</a>
        </div>
        <div>
            <a>Music</a>
        </div>
        <div>
            <a>Settings</a>
        </div>
    </nav>
      <div className='content'>
          <div>
          <img src='https://static.trip101.com/paragraph_media/pictures/002/412/765/large/1200px-Cmglee_Cambridge_Trinity_College_Great_Court.jpg?1617627235'/>
          </div>
          <div>
              ava + description
              <img src=''/>
          </div>
          <div>
              My photos
              <div>
                  New post
              </div>
              <div>
                  <div>
                      post 1
                  </div>
                  <div>
                      post 2
                  </div>
                  <div>
                      post 3
                  </div>
              </div>
          </div>
      </div>
  </div>
  )
}

export default App;
