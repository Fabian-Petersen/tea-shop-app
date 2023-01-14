import React from "react";
import styled from "styled-components";

const Product = ({ items }) => {
  return (
    <Wrapper>
      <article className='products-inventory clearfix' id='products'>
        {items.map((productItem) => {
          const { id, image, price, name, desc } = productItem;
          return (
            <div key={id} className='product'>
              <div className='container'>
                <img src={image} alt={name} className='product-img' />
                <div className='img-background'></div>
              </div>
              <h4 className='product-title'>{name}</h4>
              <p>{desc}</p>
              <h4 className='product-price'>R {price}</h4>
            </div>
          );
        })}
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .product-img {
    border-radius: 10px;
  }

  .container {
    position: relative;
    overflow: hidden;
  }

  .img-background {
    width: 100%;
    height: 100%;
    bottom: -100%;
    position: absolute;
    background-color: #1f3d4750;
    transition: 0.3s ease-in-out;
    border-radius: 10px;
  }

  .container:hover .img-background {
    bottom: 0;
    cursor: pointer;
    border-radius: 10px;
  }

  .product-title {
    margin-top: 1.5rem;
  }
`;

export default Product;
