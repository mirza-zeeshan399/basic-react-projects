import useLocalStorage from "./lightdarktogglehook";
import "./styles08.css";
const LightDarkMode = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
  console.log(theme);

  const handleThemeChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div
      style={
        theme === "dark"
          ? { backgroundColor: "#050523" }
          : theme === "light"
          ? { backgroundColor: "white" }
          : { backgroundColor: "white" }
      }
      className="bg"
    >
      <button
        className="toggle-theme"
        onClick={() => handleThemeChange()}
        style={
          theme === "dark"
            ? { backgroundColor: "black", color: "white" }
            : theme === "light"
            ? { backgroundColor: "white", color: "black" }
            : { backgroundColor: "white", color: "black" }
        }
      >
        {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
      </button>
    </div>
  );
};

export default LightDarkMode;
