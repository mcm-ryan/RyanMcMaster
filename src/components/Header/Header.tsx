import React from "react";
import "./Header.css";
import { HeaderProps } from "./Header.types";
import logo from '../../assets/Logo.png'

export const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="header">
      <div className="header_logo">
        <img
          src={logo}
          alt="Logo"
          className="header_image"
        />
      </div>
      <nav className="header_nav">
        <ul className="header_nav-list">
          <li className="header_nav-item">
            <a href="#home">Home</a>
          </li>
          <li className="header_nav-item">
            <a href="#work">Work</a>
          </li>
          <li className="header_nav-item">
            <a href="#about">About</a>
          </li>
          <li className="header_nav-item">
            <a href="#contact">Contact Me</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
