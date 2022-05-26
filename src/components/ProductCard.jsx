import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/components/ProductCard.scss";

function ProductCard({ item }) {
  const startingMinutes = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  const startingSeconds = 0;

  const [mins, setMinutes] = useState(startingMinutes);
  const [secs, setSeconds] = useState(startingSeconds);
  useEffect(() => {
    const sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        if (mins === 0) {
          clearInterval(sampleInterval);
        } else {
          setMinutes(mins - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });
  return (
    <div className="products__product">
      <div className="product__image">
        <img src={item.image} alt="product" />
      </div>
      <div className="product__description">
        <p>{item.title}</p>
      </div>
      <div className="product__timeButton">
        <div className="timeButton__timer">
          <h2>
            {" "}
            {mins}:{secs < 10 ? `0${secs}` : secs}
          </h2>
        </div>
        <div className="timeButton__Button">
          <Link to={`/detalle/${item.id}`}>
            <button
              type="button"
              className="button__action"
              disabled={secs === 0}
            >
              Go to Detail
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
