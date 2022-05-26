import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { useState } from "react";
import ButtonAction from "../components/ButtonAction";
import "../styles/pages/ProductDetail.scss";

function ProductDetail() {
  const { idObject } = useParams();
  const { product } = useSelector((state) => state.productReducer);
  const element = product.filter((item, index) => index === idObject - 1);

  if (element[0] === undefined) {
    const [articule, setArticule] = useState([]);

    axios
      .get(`https://fakestoreapi.com/products/${idObject}`)
      .then((response) => {
        setArticule(response.data);
      });
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
  if (element[0] !== undefined) {
    const articule = element[0];

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
}

export default ProductDetail;
