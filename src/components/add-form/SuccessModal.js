import Modal from "react-modal";
import React from "react";
import "./success-modal.css";
import { createMemoryHistory } from "history";
import { Link } from "react-router-dom";

export default function SuccessModal({ modalOpen, setModalOpen }) {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#faebd7",
      borderRadius: "5%",
    },
  };

  return (
    <Modal isOpen={modalOpen} style={customStyles}>
      <div className="modal-inner">
        <label>Expense Added Successfully</label>
        <img
          src={require("../../assets/images/added-image.png")}
          alt="Expense Added"
          className="added-image"
        />
        <Link to="/">
          <div className="take-home-button">
            <i class="bi bi-house-door"></i>
            <label>Home</label>
          </div>
        </Link>
      </div>
    </Modal>
  );
}
