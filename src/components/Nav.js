/* global $ */

import React, { useEffect, useRef } from 'react';

export function Nav() {
  
  const navRef = useRef(null);
  useEffect(() => {
    console.log('jQuery is loaded:', typeof jQuery !== 'undefined');
    console.log('Superfish is loaded:', typeof $.fn.superfish !== 'undefined');

    if (typeof jQuery !== 'undefined' && typeof $.fn.superfish !== 'undefined') {
        const $nav = $(navRef.current).find('.nav-menu');
        $nav.superfish();

        return () => {
            $nav.superfish('destroy');
        };
    } else {
        console.error('Superfish is not loaded or jQuery is not available.');
    }
}, []);
  return (
    <div className="header" ref={navRef}> {/* Attach ref here */}
      <div className="container">
        <div className="logo pull-left">
          <h1><a href="index.html">MyFolio</a></h1>
        </div>

        <nav id="nav-menu-container">
          <ul className="nav-menu">
            <li><a href="#top-header">Home</a></li>
            <li><a href="#about">About me</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
         { /* <li className="sf-arrows menu-has-children">
              <a href="#dropdown" className="sf-with-ul">Drop Down</a>
              <ul>
                <li><a href="#dropdown1">Drop Down 1</a></li>
                <li><a href="#dropdown2">Drop Down 2</a></li>
                <li className="menu-has-children">
                  <a href="#dropdown3" className="sf-with-ul">Drop Down 3</a>
                  <ul>
                    <li><a href="#dropdown1-1">Drop Down 1</a></li>
                    <li><a href="#dropdown1-2">Drop Down 2</a></li>
                    <li><a href="#dropdown1-3">Drop Down 3</a></li>
                  </ul>
                </li>
              </ul>
            </li> */}
            <li><a href="#contact">Contact me</a></li>
          </ul>
        </nav>

        <nav className="nav social-nav pull-right d-none d-lg-inline">
          <a href="https://www.instagram.com/gagan_stark_46/profilecard/?igsh=aG9qejNkcmNwMGpw"><i className="fa fa-instagram"></i></a>
          
          <a href="https://www.linkedin.com/in/gagandeep-chinthakunta-3a7190326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><i className="fa fa-linkedin"></i></a>
        </nav>
      </div>
    </div>
  );
}
