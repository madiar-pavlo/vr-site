import React, { useState } from "react";
import logo from "../../../../images/logo.svg";
import hamburgerIcon from "../../../../images/icons/hamburger-button.svg";
import closeIcon from "../../../../images/icons/close-icon.png";
import NavigationList from  "../../../NavigationList/NavigationList";
import EventButton from "../../../UI/EventButton/EventButton";

const textOfNavigationLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  { title: "Technologies",
    href: "#technologies"
  },
  {
    title: "How To",
    href: "#join",
  },
];

const Header = () => {
  const [menuActive, setMenuActive] = useState(false);

  const burgerMenu = () => {
    setMenuActive(!menuActive);
  };
  return (
    <header className='header'>
      <a href="#hero" className='header__images'>
        <img src={logo} rel="preload" alt='' className='header__images--dragon' />
      </a>
      <nav
        className={
          menuActive
            ? "header__navigation header__navigation--active"
            : "header__navigation"
        }
      >
        <NavigationList
          navigationLinksContent={textOfNavigationLinks}
          classNames='header'
        />
      </nav>
      <div
        className={
          menuActive
            ? "header__buttons header__buttons--active tablet-hidden mobile-visible"
            : "header__buttons tablet-hidden"
        }
      >
        <EventButton classNames='header__button button--transparent'>
            Contact Us
        </EventButton>
        <EventButton classNames='header__button'>
            Join Hydra
        </EventButton>
      </div>
      <button
        className='header__burger-button button__burger mobile-visible'
        onClick={burgerMenu}
      >
        <img src={hamburgerIcon} alt='open menu' />
      </button>
      <button
        className={
          menuActive
            ? "header__burger-button button__burger--close mobile-visible"
            : "header__burger-button button__burger--close mobile-visible hidden"
        }
        onClick={burgerMenu}
      >
        <img src={closeIcon} alt='close menu' />
      </button>
    </header>
  );
};

export default Header;
