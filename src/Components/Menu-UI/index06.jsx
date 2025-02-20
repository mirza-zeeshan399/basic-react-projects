import { useState } from "react";
import { navbarSections } from "./navbarData";
import "./styles06.css";

const MenuUi = () => {
  const [navbar, setNavbar] = useState(navbarSections);
  const [navbarVisiblity, setNavbarVisibility] = useState(false);
  const [subSection, setSubSection] = useState([]);
  const [subSectionToggle, setSubSectionToggle] = useState(false);
  const [sectionId, setSectionId] = useState(null);
  return (
    <>
      <section className="header">
        <button
          className="toggle-navbar"
          onClick={() => setNavbarVisibility(!navbarVisiblity)}
        >
          Open
        </button>
        <nav className={navbarVisiblity ? "navbar" : "navbar-not-visible"}>
          <ul>
            {navbar.map((item, index) => {
              const { title, link, subSections, id } = item;
              const revealSubSections = (itemId) => {
                const section = navbar.find((item) => item.id === itemId);
                setSectionId(section.id);
                if (section.id === id) {
                  setSubSection(section?.subSections);
                }
              };
              return (
                <>
                  <a key={id} className="section-links">
                    <li
                      className="list-items"
                      onClick={() => {
                        revealSubSections(id);
                        setSubSectionToggle(!subSectionToggle);
                      }}
                    >
                      {title} {subSectionToggle && sectionId === id && title !=='Home'? '-' : title !== 'home'  ? '+' : null}
                    </li>
                  </a>

                  {subSectionToggle &&
                    sectionId === id &&
                    navbarVisiblity &&
                    subSection.map((item) => {
                      const { title, link, id } = item;
                      return (
                        <a key={id} className="sub-section-links">
                          <li className="list-items">{title}</li>
                        </a>
                      )
                    })}
                </>
              )
            })}
            
          </ul>
        </nav>
      </section>
    </>
  );
};

export default MenuUi;
