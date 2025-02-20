import { useState } from "react";
import Modal from "./modal-test";
import './styles11.css';
const ModalPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalClosed, setIsModalClosed] = useState(true);
  console.log(isModalOpen);

  const handleModalOpen = () => {
    setIsModalClosed(false);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsModalClosed(true);
  };
  return (
    <div className="container">
      {isModalClosed ? <button className="modal-open-btn" onClick={() => handleModalOpen()}>
        Open Modal
      </button> : null}
      {isModalOpen && <Modal closeModal={handleModalClose} />}
    </div>
  );
};

export default ModalPopup;
