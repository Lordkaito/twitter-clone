import React from "react";
import { BsTwitter, BsPlusCircleFill, BsBookmark } from "react-icons/bs";
import { AiFillHome, AiOutlineBell, AiOutlineUnorderedList, AiOutlineUser } from 'react-icons/ai';
import { BiHash, BiEnvelope } from 'react-icons/bi';
import { FiSearch } from 'react-icons/fi';
import { CgMoreO } from 'react-icons/cg';
import useWindowDimensions from "../hooks/getWindowsDimensions";

const Navbar = () => {
  const { width } = useWindowDimensions();
  return (
    <div id="nav-container" className="navbar">
      <div className="nav-logo">
        <div className="logo-item">
          <BsTwitter />
        </div>
      </div>
      <div className="nav-start">
        <div className="start-item">
          <div className="start-item-icon">
            <AiFillHome />
          </div>
          <div className="start-item-text">
            Home
          </div>
        </div>
      </div>
      <div className="nav-explore">
        <div className="explore-item">
          <div className="explore-item-icon">
            {width > 600 ? <BiHash /> : <FiSearch />}
          </div>
          <div className="explore-item-text">
            Explore
          </div>
        </div>
      </div>
      <div className="nav-notifications">
        <div className="notifications-item">
          <div className="notifications-item-icon">
            <AiOutlineBell />
          </div>
          <div className="notifications-item-text">
            Notifications
          </div>
        </div>
      </div>
      <div className="nav-messages">
        <div className="messages-item">
          <div className="messages-item-icon">
            <BiEnvelope />
          </div>
          <div className="messages-item-text">
            Messages
          </div>
        </div>
      </div>
      <div className="nav-save">
        <div className="save-item">
          <div className="save-item-icon">
            <BsBookmark />
          </div>
          <div className="save-item-text">
            Saved
          </div>
        </div>
      </div>
      <div className="nav-list">
        <div className="list-item">
          <div className="list-item-icon">
            <AiOutlineUnorderedList />
          </div>
          <div className="list-item-text">
            Lists
          </div>
        </div>
      </div>
      <div className="nav-profile">
        <div className="profile-item">
          <div className="profile-item-icon">
            <AiOutlineUser />
          </div>
          <div className="profile-item-text">
            Profile
          </div>
        </div>
      </div>
      <div className="nav-options">
        <div className="option-item">
          <div className="option-item-icon">
            <CgMoreO />
          </div>
          <div className="option-item-text">
            Options
          </div>
        </div>
      </div>
      <div className="nav-tweet">
        <div className="tweet-item">
          <div className="tweet-item-icon">
            {width < 600 ? <BsPlusCircleFill /> : null}
          </div>
          <div className="tweet-item-text">
            Tweet
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;