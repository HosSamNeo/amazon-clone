import { nanoid } from "@reduxjs/toolkit";
import Product from "./Product";
import { useSelector } from "react-redux";
const ProductFeed = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 bg-gray-50 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, image, price, description, category, rating }) => (
          <Product
            key={nanoid()}
            id={id}
            title={title}
            image={image}
            price={price}
            description={description}
            category={category}
            rating={rating}
          />
        ))}
      <img className="md:col-span-full" src="/amazon-ad.jpg" alt="amazon-ad" />

      {products
        .slice(4, products.length)
        .map(({ id, title, image, price, description, category, rating }) => (
          <Product
            key={nanoid()}
            id={id}
            title={title}
            image={image}
            price={price}
            description={description}
            category={category}
            rating={rating}
          />
        ))}
    </div>
  );
};

export default ProductFeed;
