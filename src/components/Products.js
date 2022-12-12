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
          {/* Start Products Info */}
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
          {/* End Prducts Info */}

          <article className="products-inventory clearfix">
            <div className="product">
              <img src={Image1} alt="product 1" className="product-img" />
              <h4 className="product-title">Ginger Peach Tea</h4>
              <h4 className="product-price">R65,99</h4>
            </div>
            <div className="product">
              <img src={Image2} alt="product 2" className="product-img" />
              <h4 className="product-title">White Tea</h4>
              <h4 className="product-price">R45,99</h4>
            </div>
            <div className="product">
              <img src={Image3} alt="product 3" className="product-img" />
              <h4 className="product-title">Fruit Sangaria</h4>
              <h4 className="product-price">38,99</h4>
            </div>
          </article>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .products {
    background: var(--clr-grey-10);
  }

  .products article {
    padding: 2rem 0;
  }

  .product-text {
    color: var(--clr-grey-5);
    max-width: 26rem;
  }

  .product {
    margin-bottom: 2rem;
  }

  .product-img {
    border-radius: var(--border-rad);
    margin-bottom: 2rem;
    height: 17rem;
    object-fit: cover;
  }

  .product-price {
    color: var(--clr-primary);
  }

  @media screen and (min-width: 768px) {
    .product {
      float: left;
      width: 50%;
      padding-right: 2rem;
    }
  }

  @media screen and (min-width: 992px) {
    .product {
      width: 33.3%;
    }
  }

  @media screen and (min-width: 1200px) {
    .products-info {
      float: left;
      width: 30%;
    }

    .products-inventory {
      float: left;
      width: 70%;
    }
    .product {
      margin-bottom: 0rem;
      padding: 0 1rem;
    }
  }
`;

export default Products;
