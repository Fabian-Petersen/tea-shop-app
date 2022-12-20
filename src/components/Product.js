import React from "react";

const Product = ({ items }) => {
  return (
    <article className="products-inventory clearfix">
      {items.map((productItem) => {
        const { id, image, price, name, desc } = productItem;
        return (
          <div key={id} className="product">
            <img src={image} alt={name} className="product-img" />
            <h4 className="product-title">{name}</h4>
            <p>{desc}</p>
            <h4 className="product-price">{price}</h4>
          </div>
        );
      })}
    </article>
  );
};
export default Product;
