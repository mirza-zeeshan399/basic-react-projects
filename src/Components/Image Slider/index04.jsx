import axios from "axios";
import { useEffect, useState } from "react";
import "./styles04.css";

const ImageSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animateprevSlide, setAnimatePrevSlide] = useState(false);
  const [animatenextSlide, setAnimateNextSlide] = useState(false);

  const url = "https://picsum.photos/v2/list";
  useEffect(() => {
    const getImages = async () => {
      try {
        setLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, []);

  if (error !== null) console.log(error);
  if (loading) return <h1>LOADING!!</h1>;

  const handlePrevious = () => {
    setAnimateNextSlide(false);
    setAnimatePrevSlide(true);
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setAnimatePrevSlide(false);
    setAnimateNextSlide(true);
    setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
  };

  return (
    <>
      <div className="main-wrapper">
        <button className="prev-btn" onClick={() => handlePrevious()}>
          prev
        </button>
        <div className="img-wrapper">
          <div
            className="img-container"
            style={
              animatenextSlide
                ? { transform: `translateX(-${currentSlide * 100}%)` }
                : animateprevSlide
                ? { transform: `translateX(-${currentSlide * 100}%)` }
                : { transform: "translateX(0)" }
            }
          >
            {data.map((item, index) => {
              const { download_url, id } = item;
              return (
                <>
                  <img
                    src={download_url}
                    alt="Not Available"
                    key={id}
                    className={
                      currentSlide === index
                        ? "random-image"
                        : "random-image hide-random-image"
                    }
                  />
                </>
              );
            })}
          </div>
        </div>
        <button className="next-btn" onClick={() => handleNext()}>
          next
        </button>
      </div>
    </>
  );
};

export default ImageSlider;
