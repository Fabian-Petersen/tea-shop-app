import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Icons from "../assets/images/icons";

const Contact = () => {
  const { faLocationArrow, faEnvelope, faPhone } = Icons;
  return (
    <Wrapper>
      <section className="contact">
        <div className="section-center clearfix">
          <article className="contact-info">
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faLocationArrow} />
                </span>
                Address
              </h4>
              <h4 className="contact-text">Tygervalley, Cape Town, 7530</h4>
            </div>
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faEnvelope} />
                </span>
                Email
              </h4>
              <h4 className="contact-text">john@email.com</h4>
            </div>
            <div className="contact-item">
              <h4 className="contact-title">
                <span className="contact-icon">
                  <FontAwesomeIcon icon={faPhone} />
                </span>
                Phone
              </h4>
              <h4 className="contact-text">021 555 7852</h4>
            </div>
          </article>

          {/* ================================================= Contact Form  ============================================= */}

          <article className="contact-form">
            <h3>Contact Us</h3>
            <form action="">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="form-control"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="john@mail.com"
                  className="form-control"
                />
                <textarea
                  name="message"
                  placeholder="message"
                  className="form-control"
                  rows="5"
                ></textarea>
              </div>
              <button className="btn submit-btn" type="submit">
                Submit
              </button>
            </form>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact {
    background-color: var(--clr-grey-10);
  }

  .contact-form,
  .contact-info {
    margin: 1rem 0;
  }

  .contact-item {
    margin-bottom: 1.75rem;
  }

  .contact-title {
    color: var(--clr-primary);
    font-weight: 400;
  }

  .contact-title span {
    padding-right: 0.75rem;
  }

  .contact-text {
    text-transform: uppercase;
  }

  /* ================================================= Contact Form Styles  ============================================= */

  .contact-form {
    background: var(--clr-white);
    border-radius: var(--border-rad);
    text-align: center;
    box-shadow: 0 5px rgba(0, 0, 0, 0.1);
    transition: var(--transition);
    max-width: 35rem;
  }

  .contact-form:hover {
    box-shadow: 0 5px rgba(0, 0, 0, 0.2);
  }

  .contact-form h3 {
    padding-top: 1.25rem;
    color: var(--clr-grey-5);
  }

  .form-group {
    padding: 1rem 1.5rem;
  }

  .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background-color: var(--clr-grey-10);
    border-radius: var(--border-rad);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
  }

  .form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
  }

  .submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--border-rad);
    border-bottom-right-radius: var(--border-rad);
  }

  @media screen and (min-width: 992px) {
    .contact-form,
    .contact-info {
      float: left;
      width: 50%;
    }
  }
`;

export default Contact;
