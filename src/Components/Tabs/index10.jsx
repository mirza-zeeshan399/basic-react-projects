import { useState } from "react";
import { FirstTab, SecondTab, ThirdTab } from "./tabs";
export default function Tabs() {
  const [tab, setTab] = useState(0);

  function handleTabs(id) {
    const allTabs = document.querySelectorAll(".tabs");
    allTabs.forEach((tab, index) => {
      id === index + 1 ? setTab(id) : setTab(0);
    });
  }
  return (
    <div>
      <button
        className="tab-btn"
      >
        Tab 1
      </button>
      <button
        className="tab-btn"
      >
        Tab 2
      </button>
      <button
        className="tab-btn"
      >
        Tab 3
      </button>
      <div className="tab-container">
      </div>
    </div>
  );
}
