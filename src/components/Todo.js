import { useState } from "react";

import Backdrop from "./Backdrop";
import Modal from "./Modal";

const Todo = ({ title }) => {
  const [openModal, setOpenModal] = useState(false);

  const handleDelete = () => setOpenModal(true);

  const handleCloseModal = () => setOpenModal(false);

  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={handleDelete}>
          Delete
        </button>
      </div>
      {openModal && <Modal handleCloseModal={handleCloseModal} />}
      {openModal && <Backdrop handleCloseModal={handleCloseModal} />}
    </div>
  );
};

export default Todo;
