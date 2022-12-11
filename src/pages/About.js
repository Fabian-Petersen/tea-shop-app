import React from "react";
import styled from "styled-components";
import Image from "../assets/images/about-bcg.jpeg";

const About = () => {
  return (
    <Wrapper>
      <section className="section-center clearfix">
        <article className="about-img">
          <div className="about-picture-container">
            <img src={Image} alt="kettle" className="about-picture" />
          </div>
        </article>
        <article className="about-info">
          <div className="section-title">
            <h3>About Our</h3>
            <h2>Tea Station</h2>
          </div>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            ullam corrupti earum molestiae
          </p>
          <p className="about-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            ullam corrupti
          </p>
          <a href="about.html" className="btn">
            Learn More
          </a>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .about-img,
  .about-info {
    padding: 2rem 0;
  }

  .about-picture-container {
    background-color: var(--clr-primary);
    border: 0.5rem solid var(--clr-primary);
    max-width: 30rem;
    overflow: hidden;
  }

  .about-picture {
    transition: var(--transition);
  }

  .about-picture-container:hover .about-picture {
    opacity: 0.5;
    transform: scale(1.2);
  }

  .about-text {
    max-width: 26rem;
    color: var(--clr-grey-5);
  }

  @media screen and (min-width: 992px) {
    .about-img,
    .about-info {
      float: left;
      width: 50%;
    }
    .about-info {
      padding-left: 2rem;
    }
  }
`;

export default About;
