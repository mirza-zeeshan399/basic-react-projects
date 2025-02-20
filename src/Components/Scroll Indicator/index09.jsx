import { useEffect, useState } from "react";
import fetchProducts from "./fetchData";
import "./styles09.css";

export default function ScrollIndicator() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const url = "https://dummyjson.com/products?limit=80&skip=0";
  console.log(
    window.scrollY,
    window.innerHeight,
    document.documentElement.scrollHeight
  );

  const handleScroll = () => {
    const scrollTop = window.scrollY; // Current vertical scroll position
    const windowHeight = window.innerHeight; // Total window height
    const docHeight = document.documentElement.scrollHeight; // Total document height

    const totalScrollableHeight = docHeight - windowHeight; // Total scrollable height
    const scrollProgress = (scrollTop / totalScrollableHeight) * 100; // Calculate scroll
    setScrollPercentage(scrollProgress);
  };
  useEffect(() => {
    fetchProducts(setData, setLoading, url);
  }, [url]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (loading) {
    return <h1>LOADING!!!</h1>;
  }
  return (
    <div className="container">
      <div
        className="scroll-indicator"
        style={{ width: `${scrollPercentage}%` }}
      ></div>
      <section className="data-container">
        {data.map((item) => {
          const { title, id } = item;
          return (
            <div className="items" key={id}>
              <h3>{title}</h3>
            </div>
          );
        })}
      </section>
    </div>
  );
}
