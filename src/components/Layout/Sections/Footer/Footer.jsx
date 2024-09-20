import React from "react";

import SiteLogo from "../../../SVG/SiteLogo";
import FacebookIcon from "../../../SVG/FacebookIcon";
import TwitterIcon from "../../../SVG/TwitterIcon";
import LinkedinIcon from "../../../SVG/LinkedinIcon";
import PinterestIcon from "../../../SVG/PinterestIcon";
import YoutubeIcon from "../../../SVG/YoutubeIcon";
import InstagramIcon from "../../../SVG/InstagramIcon";
import NavigationList from "../../../NavigationList/NavigationList";

const TEXT_OF_NAVIGATION_LINKS = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Services",
    href: "#services",
  },
  {
    title: "Technologies",
    href: "#technologies",
  },
  {
    title: "How To Join Hydra",
    href: "#join",
    breakPoint: 1,
  },
];

const TEXT_OF_INFORMATION_LINKS = [
  {
    title: "F.A.Q",
    href: "#",
  },
  {
    title: "SITEMAP",
    href: "#",
  },
  {
    title: "CONDITIONS",
    href: "#",
  },
  {
    title: "LICENSES",
    href: "#",
  },
];

const CONTACTS_TITLE = "SOCIALIZE WITH HYDRA";

const COPYRIGHT =
  "2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS RESERVED";

const BUTTON = "BUILD YOUR WORLD";

const contactsLinks = [
  {
    content: FacebookIcon,
    href: "https://facebook.com",
  },
  {
    content: TwitterIcon,
    href: "https://twitter.com",
  },
  {
    content: LinkedinIcon,
    href: "https://linkedin.com",
  },
  {
    content: YoutubeIcon,
    href: "https://youtube.com",
  },
  {
    content: InstagramIcon,
    href: "https://instagram.com",
  },
  {
    content: PinterestIcon,
    href: "https://pinterest.com",
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <a href="#hero" className='footer__site-logo--wrapper'>
        <SiteLogo classNames='footer__site-logo' />
      </a>
      <nav className='footer__navigation'>
        <NavigationList
          navigationLinksContent={TEXT_OF_NAVIGATION_LINKS}
          classNames='footer'
        />
      </nav>
      <div className='footer__FAQ'>
        <NavigationList
          navigationLinksContent={TEXT_OF_INFORMATION_LINKS}
          classNames='footer'
        />
      </div>
      <div className='footer__contacts'>
        <div className='footer__contacts--wrapper'>
          <h3 className='footer__title'>{CONTACTS_TITLE}</h3>
          <NavigationList
            navigationLinksContent={contactsLinks}
            classNames='footer__contacts'
          />
          <button className='footer__button button'>{BUTTON}</button>
        </div>
      </div>
      <small className='footer__copyright'>{COPYRIGHT}</small>
    </footer>
  );
};

export default Footer;
