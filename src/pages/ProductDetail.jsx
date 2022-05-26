import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import ButtonAction from "../components/ButtonAction";
import "../styles/pages/ProductDetail.scss";
import loadingGift from "../components/Loading.svg";

function ProductDetail() {
  const { idObject } = useParams();

  const [articule, setArticule] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://fakestoreapi.com/products/${idObject}`)
      .then((response) => {
        setArticule(response.data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <img src={loadingGift} alt="gif Loading" />
        <h2>Loading...</h2>
      </div>
    );
  }

  return (
    <div className="container__productDetail">
      <h2>{articule.title}</h2>
      <div className="container__image">
        <img src={articule.image} alt="Product" />
      </div>
      <h3>{articule.price}</h3>
      <h5>{articule.category}</h5>
      <p>{articule.description}</p>
      <div className="container__Buttons">
        <Link to="/">
          <ButtonAction className="button__action" content="Go to Home" />
        </Link>
      </div>
    </div>
  );
}
export default ProductDetail;
