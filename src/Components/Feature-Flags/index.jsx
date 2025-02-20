import { useContext } from "react";
import Accordion from "../Accordion";
import ImageSlider from "../Image Slider/index04";
import LightDarkMode from "../Light-Dark-Mode/index08";
import { FeatureFlagsContext } from "./context";

const FeatureFlags = () => {

    const {loading,enabledFlags} = useContext(FeatureFlagsContext);


  const components = [
    {
      key: "Accordion",
      component: <Accordion />,
    },
    { key: "LightDarkMode", component: <LightDarkMode /> },
    {
        key:"Image Slider",
        component:<ImageSlider/>
    },
  ];

  if(loading) return <h1>LOADING!!</h1>
  return (
    <div>
      <h1>Feature Flags</h1>
      <div>
        
      </div>
    </div>
  );
};

export default FeatureFlags;
