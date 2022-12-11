import React from "react";
import styled from "styled-components";

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
  header {
    min-height: 100vh;
    background-size: cover;
  }
`;

export default Header;
