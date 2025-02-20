import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import "./style05.css";

const MoreComponents = ({ products }) => {};

const LoadMoreData = () => {
  const [loading, setIsLoading] = useState(false);
  const [error, setIsError] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [limit, setLimit] = useState(20);
  const [disable, setDisable] = useState(false);
  const url = `https://dummyjson.com/products?limit=${limit}&skip=${
    count === 0 ? 0 : count * 20
  }`;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        // setProducts(response.data.products);
        setProducts((prevProducts) => [
          ...prevProducts,
          ...response.data.products,
        ]);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProducts();
  }, [count]);

  const loadMoreItems = () => {
    setCount(count + 1);
    // setLimit(limit + 20);
  };

  useEffect(() => {
    if (products && products.length === 80) {
      setDisable(true);
    }
    console.log(products.length);
  }, [products]);
  if (loading) {
    return (
      <div>
        <h1>LOADING!!!</h1>
      </div>
    );
  }

  return (
    <div style={{ height: "100dvh" }}>
      <section className="items-section">
        {products.map((item, index) => {
          const {
            id,
            description,
            thumbnail,
            brand,
            category,
            availabilityStatus,
            price,
            rating,
            shippingInformation,
            title,
          } = item;
          return (
            <article className="item-container" key={index}>
              <div className="img-container">
                <img src={thumbnail} alt={title} className="product-img" />
              </div>
              <div className="product-summary">
                <p className="product-title">{title}</p>
                <p className="product-description">{description}</p>
              </div>
              <div className="product-price-wrapper">
                <p className="product-price">${price}</p>
              </div>
            </article>
          );
        })}
      </section>
      <footer
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          className="load-more-btn"
          onClick={() => loadMoreItems()}
          disabled={disable}
        >
          More Items
        </button>
        {disable ? <h1>No More Products</h1> : null}
      </footer>
    </div>
  );
};

export default LoadMoreData;
