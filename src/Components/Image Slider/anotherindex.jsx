import axios from "axios";
import { useEffect, useState, lazy, Suspense } from "react";
import "./styles04.css";

const ImageSlider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [imgTracker,setImgTracker] = useState(0);
  const [insideSlide,setInsideSlide] = useState(0);
  const [currentImages,setCurrentImages] = useState([]);
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

  useEffect(() => {
    if (data.length > 0) {
      setCurrentImages(getThreeImages(currentSlide));
    }
  }, [currentSlide, data]);

  if (error !== null) console.log(error);
  if (loading) return <h1>LOADING!!</h1>;

  const handlePrevious = () => {
    setAnimatePrevSlide(true);
    setCurrentSlide(currentSlide === 0 ? data.length - 1 : currentSlide - 1);
    setTimeout(() => {
      setAnimatePrevSlide(false);
    }, 500);
  };
  const handleNext = () => {
    setAnimateNextSlide(true);
    setInsideSlide(insideSlide === currentImages.length - 1 ? 0 : insideSlide + 1);
    // setCurrentSlide(currentSlide === data.length - 1 ? 0 : currentSlide + 1);
    setTimeout(() => {
      setAnimateNextSlide(false);
    }, 700);
  };
    function getThreeImages(getIndex) {
      let threeImages = [];

      if (getIndex === 0) {
        threeImages.push(data[data.length - 1]);
        threeImages.push(data[getIndex]);
        threeImages.push(data[getIndex + 1]);
      } else if (getIndex === data.length - 1) {
        threeImages.push(data[getIndex - 1]);
        threeImages.push(data[getIndex]);
        threeImages.push(data[0]);
      } else {
        threeImages.push(data[getIndex - 1]);
        threeImages.push(data[getIndex]);
        threeImages.push(data[getIndex + 1]);
      }
      return threeImages;
    }
  return (
    <>
      <div className="main-wrapper">
        <button className="prev-btn" onClick={() => handlePrevious()}>
          prev
        </button>
        <div className="img-wrapper">
        {
            data.map((item,index)=>{
                const currentThreeImgs = getThreeImages(index);
                
                if(index === currentSlide) {

                   return currentThreeImgs.map((item,index)=>{
                        const { download_url, id } = item;
                        if(insideSlide === index)
                        return <>
                        <img src={download_url} alt="Not Available" />
                        </>
                       })
                    }
              
            })
        }
        </div>
        <button className="next-btn" onClick={() => handleNext()}>
          next
        </button>
      </div>
    </>
  );
};
export default ImageSlider