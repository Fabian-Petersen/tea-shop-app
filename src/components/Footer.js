import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../assets/images/icons";

const Footer = () => {
  const { faFacebook, faTwitter, faInstagram } = Icons;
  return (
    <Wrapper>
      <footer className="footer">
        <div className="section-center">
          <div className="social-icon">
            <a href="http://">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="http://">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="http://">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <h4 className="footer-text">
            &copy; <span id="date"></span>
            <span className="company">Tea Station</span>
            All Rights reserved
          </h4>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  .footer {
    background: #222;
    text-align: center;
  }

  .social-icon a {
    color: var(--clr-white);
    font-size: 1.5rem;
    margin-right: 1.5rem;
    transition: var(--transition);
  }

  .social-icon a:hover {
    color: var(--clr-primary);
  }

  .footer-text {
    margin-top: 1.2rem;
    color: var(--clr-white);
    text-transform: uppercase;
    font-weight: 400;
  }

  .company {
    color: var(--clr-primary);
    margin-right: 0.75rem;
  }
`;

export default Footer;
