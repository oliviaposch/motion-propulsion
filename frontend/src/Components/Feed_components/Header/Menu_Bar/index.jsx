import React, { useRef, useState, useEffect } from "react";
import logo from "../../../../Assets/pngs/logo.png";
import posts_logo from "../../../../Assets/pngs/posts_logo.png";
import friends_logo from "../../../../Assets/svgs/icon-friends.svg";
import notification from "../../../../Assets/svgs/notification_bell.svg";
import menu from "../../../../Assets/svgs/menu.svg";
import logout from "../../../../Assets/svgs/logout.svg";
import profile from "../../../../Assets/svgs/profile.svg";
import jennifer from "../../../../Assets/images/users/jennifer.png";
import { useHistory } from "react-router";
import {
  MBDiv,
  MenuLeft,
  LogoImg,
  MBTitle,
  PostsBtn,
  FriendsBtn,
  MenuRight,
  UserBtn,
  MenuBtn,
  BaseBtn,
  DropdownNav,
  Li,
  LiSpan,
} from "./styled.js";

const MenuBar = () => {

  //dropdown Navigation
  const useDetectOutsideClick = (el, initialState) => {
    const [isActive, setIsActive] = useState(initialState);
  
    useEffect(() => {
      const pageClickEvent = (e) => {
        // If the active element exists and is clicked outside of
        if (el.current !== null && !el.current.contains(e.target)) {
          setIsActive(!isActive);
        }
      };
  
      // If the item is active then listen for clicks
      if (isActive) {
        window.addEventListener('click', pageClickEvent);
      }
  
      return () => {
        window.removeEventListener('click', pageClickEvent);
      }
  
    }, [isActive, el]);
    return [isActive, setIsActive];
  }
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  const history = useHistory();
  const userBtnHandler = () => {
    history.push("/profile");
  };

  const postsBtnHandler = () => {
    history.push("/feed");
  };

  const friendsBtnHandler = () => {
    history.push("/friends");
  };

  //Logout function
  const logoutLi = () => {
    localStorage.clear();
    history.push('/signin');
  }

  return (
    <MBDiv>
      <MenuLeft>
        <LogoImg src={logo} />
        <MBTitle>Motion</MBTitle>
        <PostsBtn onClick={postsBtnHandler}>
          <img src={posts_logo} alt="posts" fill="red" stroke="green" />
          <p>Posts</p>
        </PostsBtn>
        <FriendsBtn onClick={friendsBtnHandler}>
          <img src={friends_logo} alt="friends" fill="red" stroke="green" />
          <p>Find Friends</p>
        </FriendsBtn>
      </MenuLeft>
      <MenuRight>
        <BaseBtn>
          <img src={notification} alt="alert-bell" />
        </BaseBtn>
        <UserBtn onClick={userBtnHandler}>
          <img src={jennifer} alt="user" />
        </UserBtn>

        <MenuBtn onClick={onClick} className="menu-trigger">
          <img src={menu} alt="menu-button" />
        </MenuBtn>
        <DropdownNav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
          <ul>
            <Li onClick={userBtnHandler}><LiSpan><img src={logout} alt="logout-icon" /></LiSpan>Profile</Li>
            <Li onClick={logoutLi}><LiSpan><img src={profile} alt="profile-icon" /></LiSpan>Logout</Li>
          </ul>
        </DropdownNav>

      </MenuRight>
    </MBDiv>
  );
};

export default MenuBar;
