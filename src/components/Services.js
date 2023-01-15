import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import services from "../servicesData";

const Services = () => {
  return (
    <Wrapper>
      <section className="services" id="services">
        <div className="section-title services-title">
          <h3>Explore</h3>
          <h2>Our Services</h2>
        </div>
        <div className="section-center clearfix">
          {services.map((item) => {
            const { id, service, image, description, icon } = item;
            return (
              <article className="service-card" key={id}>
                <div className="service-img-container">
                  <img
                    src={image}
                    alt="single service 1"
                    className="service-img"
                  />
                  <span className="service-icon">
                    <FontAwesomeIcon className="fa-fw" icon={icon} />
                  </span>
                </div>
                <div className="service-info">
                  <h4>{service}</h4>
                  <p>{description}</p>
                  <a href="products.html" className="btn service-btn">
                    Read More
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .services {
    margin-top: 4rem;
    margin-bottom: -4rem;
    text-align: center;
  }

  .service-card {
    margin: 2rem 0;
    background: var(--clr-grey-10);
    border-radius: var(--border-rad);
    box-shadow: 0 5px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
  }

  .service-card:hover {
    transform: scale(1.02);
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  .service-img {
    height: 17rem;
    object-fit: cover;
    border-top-left-radius: var(--border-rad);
    border-top-right-radius: var(--border-rad);
  }

  .service-info {
    text-align: center;
    padding: 3rem 1rem 2.5rem 1rem;
  }

  .service-info p {
    max-width: 20rem;
    color: var(--clr-grey-5);
    margin: 0 auto;
    margin-bottom: 1.25rem;
  }

  .service-btn {
    font-size: 0.75rem;
    text-transform: capitalize;
    padding: 0.375rem 0.5rem;
    font-weight: 400;
  }

  .service-img-container {
    position: relative;
  }

  .service-icon {
    position: absolute;
    left: 50%;
    bottom: 0;
    font-size: 2rem;
    color: var(--clr-primary);
    background: var(--clr-primary-light);
    padding: 0.25rem 0.6rem;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    border: solid 0.375rem var(--clr-grey-10);
  }

  @media screen and (min-width: 768px) {
    // each card take 45% with a 5% margin on the right
    .service-card {
      float: left;
      width: 45%;
      margin-right: 5%;
    }
  }

  @media screen and (min-width: 992px) {
    // each card take 45% with a 5% margin on the right
    .service-card {
      float: left;
      width: 30%;
      margin-right: 3.33333%;
    }
  }
`;

export default Services;
