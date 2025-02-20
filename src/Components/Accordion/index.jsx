import { useState } from "react";
import accordionData from "./data";
import "./styles.css";


const Accordion = () => {
  const [state, setState] = useState(accordionData);
  const [expand, setExpand] = useState(false);
  const [itemId, setItemId] = useState(null);
  const [multi,setMulti] = useState(false)

  return (
    <>
      <section className="accordion-wrapper">
        {state.map(({ id, question, answer }) => {
          return (
            <div className="accordion" key={id}>
              <div className="para-wrapper">
                <p className="question">{question}</p>
              </div>
              <div className="btn-wrapper">
                <button
                  className="expand-btn"
                  onClick={() => {
                    setExpand(id !== itemId || !expand);
                    setItemId(id);
                    console.log(expand);
                  }}
                >
                  +
                </button>
              </div>
              {id === itemId && expand &&
            
                <div className='answer-wrapper'>
                  <p className="answer">{answer}</p>
                </div>
               
              }
            </div>
          );
        })}
         
      </section>
    </>
  );
};

export default Accordion;
