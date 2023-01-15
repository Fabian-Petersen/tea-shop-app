import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import contacts from "../contactData";
import styled from "styled-components";

const ContactInfo = () => {
  return (
    <Wrapper>
      <article className='contact-info'>
        {contacts.map((item) => {
          const { contact, detail, icon } = item;
          return (
            <div className='contact-item'>
              <h4 className='contact-title'>
                <span className='contact-icon'>
                  <FontAwesomeIcon icon={icon} />
                </span>
                {contact}
              </h4>
              <h4 className='contact-text'>{detail}</h4>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.article`
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
`;

export default ContactInfo;
