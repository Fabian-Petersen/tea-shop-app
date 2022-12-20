import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../assets/images/icons";

const Skills = () => {
  const { faMugHot, faMortarPestle, faGlassCheers, faBomb } = Icons;
  return (
    <Wrapper>
      <section className="skills clearfix">
        <article className="skill">
          <span className="skill-icon">
            <FontAwesomeIcon icon={faMugHot} />
          </span>
          <h4 className="skill-title">Made in US</h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            natus ducimus
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <FontAwesomeIcon icon={faGlassCheers} />
          </span>
          <h4 className="skill-title">Relaxation</h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            natus ducimus debitis corrupti accusantium error eius nihil eum
            praesentium sed.
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <FontAwesomeIcon icon={faBomb} />
          </span>
          <h4 className="skill-title">Energy</h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            natus ducimus debitis corrupti accusantium error eius nihil eum
            praesentium sed.
          </p>
        </article>
        <article className="skill">
          <span className="skill-icon">
            <FontAwesomeIcon icon={faMortarPestle} />
          </span>
          <h4 className="skill-title">Family Recipe</h4>
          <p className="skill-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            natus ducimus debitis corrupti accusantium error eius nihil eum
            praesentium sed.
          </p>
        </article>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .skills {
    background: var(--clr-grey-10);
  }

  .skill {
    padding: 2.5rem 0;
    text-align: center;
    transition: var(--transition);
  }

  .skill-icon {
    font-size: 2.5rem;
    margin-bottom: 1.25rem;
    transition: var(--transition);
    display: inline-block;
    color: var(--clr-primary);
  }

  .skill-text {
    color: var(--clr-grey-5);
    max-width: 17rem;
    margin: 0 auto;
  }

  .skill:hover {
    background: var(--clr-white);
    box-shadow: 0 3px var(--clr-primary);
  }

  .skill:hover .skill-icon {
    transform: translateY(-5px);
  }

  @media screen and (min-width: 576px) {
    .skill {
      float: left;
      // 50% width will render a two column layout
      width: 50%;
    }
  }

  @media screen and (min-width: 1200px) {
    .skill {
      // 50% width will render a one row with each element taking 25%
      width: 25%;
    }
  }
`;

export default Skills;
