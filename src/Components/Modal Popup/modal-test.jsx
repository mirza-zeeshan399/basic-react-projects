const Modal = ({ closeModal }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-close-btn-wrapper">
        <button className="close-modal-btn" onClick={() => closeModal()}>
          &times;
        </button>
      </div>
      <div className="modal-content">
        <h1>This Modal Is Open!</h1>
      </div>
    </div>
  );
};

export default Modal;
