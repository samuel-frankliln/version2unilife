import React from 'react';
import PostFeed from './PostFeed';
//import Chat from './Chat';
import './Connect.css'; // Ensure you have this CSS file in your project
import { FaHome } from 'react-icons/fa';
import { FaCalendar, FaConnectdevelop, FaSignOutAlt, FaBook } from 'react-icons/fa';
import {  Menu, MenuItem} from 'react-pro-sidebar'
import { useNavigate } from 'react-router-dom';
import {  auth } from './firebase-config';
import { signOut } from 'firebase/auth'; // Import signOut for Firebase v9+

const ConnectPage = () => {

  const navigate = useNavigate(); 

  /* added by mizba for version 3*/
const handleLogout = () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    console.log('User signed out successfully');
    navigate('/');
  }).catch((error) => {
    // An error happened.
    console.error('Error signing out: ', error);
  });
};
  return (
    <div className='connectMain'>
    <div className="menu-bar">
        <Menu iconShape="square">
          <MenuItem icon={<FaHome />} onClick={() => navigate('/home')}>Home</MenuItem>
          <MenuItem icon={<FaCalendar />}onClick={() => navigate('/calender')}>Calendar</MenuItem>
          <MenuItem icon={<FaConnectdevelop />} onClick={() => navigate('/connect')}>Connect</MenuItem>
          <MenuItem icon={<FaBook />} onClick={() => navigate('/home')}>Courses</MenuItem>
          <MenuItem icon={<FaSignOutAlt />} onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    <div className="connectPage">
      <div className="feedContainer">
        <PostFeed />
      </div>

    </div>
    </div>
  );
};


export default ConnectPage;
