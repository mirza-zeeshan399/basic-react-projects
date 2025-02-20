import { useState } from "react";
import "./style01.css";

const RandomColorGenerator = () => {
  const [hex, setHex] = useState(null);
  const [rgb, setRgb] = useState(null);
  const lowerCaseChars = Array.from({ length: 6 }, (_, i) =>
    String.fromCharCode(i + 97)
  );
  const Numbers = Array.from({ length: 10 }, (_, i) => i);
  const alphaNumericsArray = [...lowerCaseChars, ...Numbers];
  const alphaNumerics = alphaNumericsArray.join("");

  const generateRandomHex = () => {
    function generateRandomCharacter() {
      const randomIndex = Math.floor(Math.random() * alphaNumerics.length);
      return alphaNumerics[randomIndex];
    }
    const randomCharacterArray = Array.from({ length: 7 }, (_, index) => {
      if (index === 0) {
        return "#";
      } else {
        return generateRandomCharacter();
      }
    });
    setHex(randomCharacterArray.join(""));
    console.log("hex is:", randomCharacterArray.join(""));
  };

  const generateRandomRgb = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    setRgb(`rgb(${r},${g},${b})`);
    console.log("rgb  is:", r, g, b);
  };

  return (
    <div className="main-container">
      <div className="hex-container" style={{ backgroundColor: hex }}>
        <h1>HEX:{hex}</h1>
        <button className="hex-btn" onClick={() => generateRandomHex()}>
          Generate Random Hex
        </button>
      </div>
      {/* <div className="container" style={{background:"transparent"}}> */}

      {/* </div> */}
      <div className="rgb-container" style={{ backgroundColor: rgb }}>
        <h1>RGB:{rgb}</h1>
        <button className="rgb-btn" onClick={() => generateRandomRgb()}>
          Generate RGB
        </button>
      </div>
    </div>
  );
};

export default RandomColorGenerator;
