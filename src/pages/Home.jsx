import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../store/reducers/Product.reducer";

import ProductCard from "../components/ProductCard";

import "../styles/pages/Home.scss";

function Home() {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProduct());
  }, []);
  return (
    product && (
      <div className="container__home">
        <h2>Products</h2>
        <div className="container__products">
          {product.map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    )
  );
}

export default Home;
