import React, { useState } from "react";
import styled from "styled-components";
import items from "../assets/images/productsData";
import Product from "./Product";

const ProductList = () => {
  const [productItems, setProductItem] = useState(items);
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
          <Product items={productItems} />
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
    position: relative;
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

export default ProductList;
