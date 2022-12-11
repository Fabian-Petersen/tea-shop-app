import React from "react";
import styled from "styled-components";
import Image1 from "../assets/images/product-1.jpeg";
import Image2 from "../assets/images/product-2.jpeg";
import Image3 from "../assets/images/product-3.jpeg";

const Products = () => {
  return (
    <Wrapper>
      <section className="products">
        <div className="section-center clearfix">
          <article className="products-info">
            <div className="section-title">
              <h3>Check Out</h3>
              <h2>Our Products</h2>
            </div>
            <p className="product-text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Repellendus temporibus corrupti tenetur delectus autem similique
            </p>
            <a href="products.html" className="btn">
              Inventory
            </a>
          </article>
          <article className="products-inventory clearfix">
            <div className="product">
              <img src={Image1} alt="product 1" className="product-img" />
              <h4 className="product-title">Ginger Peach Tea</h4>
              <h4 className="product-price">R65,99</h4>
            </div>
          </article>
          <article className="products-inventory clearfix">
            <div className="product">
              <img src={Image2} alt="product 2" className="product-img" />
              <h4 className="product-title">White Tea</h4>
              <h4 className="product-price">R45,99</h4>
            </div>
          </article>
          <article className="products-inventory clearfix">
            <div className="product">
              <img src={Image3} alt="product 3" className="product-img" />
              <h4 className="product-title">Fruit Sangaria</h4>
              <h4 className="product-price">38,99</h4>
            </div>
          </article>
        </div>
        Products Section
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section``;

export default Products;
