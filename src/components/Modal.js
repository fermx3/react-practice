const Modal = ({ handleCloseModal }) => {
  const handleCancel = () => handleCloseModal();
  const handleConfirm = () => handleCloseModal();

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={handleCancel}>
        Cancel
      </button>
      <button className="btn" onClick={handleConfirm}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
