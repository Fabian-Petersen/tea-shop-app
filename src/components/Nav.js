import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import links from "../pageLinks";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleNavBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Wrapper>
      <section>
        <button className='nav-btn' onClick={handleNavBar}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        {/* </span> */}
        {/* <nav className="navbar" id="navbar"> */}
        <nav className={`${isOpen ? "navbar showNav" : "navbar"}`} id='navbar'>
          <div className='navbar-header'>
            <button className='nav-close' onClick={handleNavBar}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>
          <ul className='nav-items'>
            {links.map((item, index) => {
              const { name, url } = item;
              return (
                <li key={index}>
                  <a href={url} className='nav-link'>
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .nav-btn {
    position: fixed;
    padding: 2.5rem;
    font-size: 2.5rem;
    z-index: 2;
    color: var(--clr-primary);
    background-color: transparent;
    border: none;
    animation: bounce 2s linear infinite;
  }

  .nav-btn:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  .navbar {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: var(--clr-primary);
    z-index: 2;
    box-shadow: 2px 0 2px rgba(0, 0, 0, 0.2);
    /* hide Navbar */
    transform: translateX(-100%);
    transition: var(--transition);
  }

  .showNav {
    transform: translate(0);
  }

  .navbar-header {
    text-align: right;
    padding-right: 1rem;
  }

  .nav-close {
    font-size: 2.5rem;
    padding: 2.5rem;
    cursor: pointer;
    color: #f29c9c;
    transition: var(--transition);
    background-color: transparent;
    border: none;
  }

  .nav-close:hover {
    color: #bb2525;
  }

  .nav-items {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    font-size: 1.5rem;
    padding: 0.25rem 2rem;
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    color: var(--clr-white);
    transition: var(--transition);
    margin-bottom: 1.5rem;
  }
  .nav-link:hover {
    background-color: var(--clr-primary-light);
    color: var(--clr-grey-2);
    padding-left: 2.5rem;
    border-left: 0.35rem solid red;
  }

  @media screen and (min-width: 768px) {
    .navbar {
      width: 30%;
      max-width: 20rem;
    }
  }

  /* Button Animation */
  @keyframes bounce {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.15);
    }
    100% {
      transform: scale(1);
    }
  }
`;

export default Nav;
