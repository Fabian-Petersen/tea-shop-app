import React from "react";
import styled from "styled-components";

import Image from "../assets/images/main-bcg.jpeg";

const Header = () => {
  return (
    <Wrapper>
      <header className="header">
        <div className="banner">
          <h2>Over one hundred flavours of</h2>
          <h1>
            specially
            <br />
            crafted tea
          </h1>
          <a href="skills.html" className="btn banner-btn">
            Explore
          </a>
        </div>
      </header>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  .header {
    position: relative;
    min-height: 100vh;
    background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
      url(${Image}) center/cover no-repeat fixed;
    /*animation*/
    overflow-x: hidden;
  }

  .banner {
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .banner h2 {
    font-family: var(--ff-secondary);
    color: var(--clr-primary);
    animation: slideFromRight 5s ease-in-out 1;
  }

  .banner h1 {
    text-transform: uppercase;
    color: var(--clr-white);
    margin-top: 1.25rem;
    margin-bottom: 2rem;
    animation: slideFromLeft 5s ease-in-out 1;
  }

  .banner-btn {
    outline: 0.125rem solid var(--clr-primary);
    outline-offset: 0.25rem;
    font-size: 1.2rem;
    padding: 1rem 1.7rem;
    animation: show 4s ease-in-out 1;
  }

  /* 
=========================
Animation
======================== 
 */
  @keyframes slideFromRight {
    0% {
      transform: translateX(1000px);
      opacity: 0;
    }
    50% {
      transform: translateX(-200px);
      opacity: 0.5;
    }

    75% {
      transform: translateX(50px);
      opacity: 0.75;
    }

    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes slideFromLeft {
    0% {
      transform: translateX(-1000px);
      opacity: 0;
    }
    50% {
      transform: translateX(200px);
      opacity: 0.5;
    }

    75% {
      transform: translateX(-50px);
      opacity: 0.75;
    }

    100% {
      transform: translateX(0px);
      opacity: 1;
    }
  }

  @keyframes show {
    0% {
      transform: scale(0);
      opacity: 0;
    }

    50% {
      transform: scale(1.25);
      opacity: 0.5;
    }

    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

export default Header;
