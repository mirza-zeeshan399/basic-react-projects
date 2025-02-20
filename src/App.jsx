import "./App.css";
import FeatureFlags from "./Components/Feature-Flags";
import FeatureFlagGlobalState from "./Components/Feature-Flags/context";
import GitHubProfileFinder from "./Components/Git-Hub-Profie Finder/index12";
import ImageSlider from "./Components/Image Slider/index04";
import QRCodeGenerator from "./Components/QR-code-generator/index07";
import TicTacToe from "./Components/Tic-Tac-Toe/index14";
function App() {
  return (
    <>
      <div className="scroll-watcher"></div>
      {/* <FeatureFlagGlobalState>
        <FeatureFlags/>
      </FeatureFlagGlobalState> */}
      {/* <ImageSlider/> */}
      {/* <TicTacToe/> */}
      {/* <GitHubProfileFinder/> */}
      <QRCodeGenerator/>
    </>
  );
}

export default App;
