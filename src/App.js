import React from 'react';
import logo from './logo.svg';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Navbar from './components/navbar';
import Aside from './components/aside';
import ProfileBtn from './components/profileBtn';
import Messages from './components/messages';
import MainContent from './components/mainContent';

function App() {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      {/* <div>
        <Aside />
      </div>
      <div>
        <ProfileBtn/>
      </div>
      <div>
        <Messages />
      </div>
      <div>
        <MainContent/>
      </div> */}
    </div>
  );
}

export default App;
