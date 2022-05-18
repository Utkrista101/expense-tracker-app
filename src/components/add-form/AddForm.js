import { ToastContainer, toast } from "react-toastify";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { categories } from "../../constants/add-expense";
import { addExpense } from "../../redux/actions/expenses";
import "react-toastify/dist/ReactToastify.css";
import "./add-form.css";
import SuccessModal from "./SuccessModal";

export default function AddForm() {
  const cat = categories;
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAmount = (e) => {
    const val = parseFloat(e.target.value);
    if (isNaN(val)) {
      setAmount("");
      return;
    }
    setAmount(val);
  };

  const handleCategory = (category) => {
    setCategory(category);
    setCategoryOpen(false);
  };

  const handleSubmit = () => {
    if (title === "" || amount === "" || !category) {
      const notify = () => toast("Please enter valid data");
      notify();
      return;
    }
    const data = {
      title,
      amount,
      category,
      createdAt: new Date(),
    };

    dispatch(addExpense(data));
    setModalOpen(true);
  };
  return (
    <div className="add-form">
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      <SuccessModal modalOpen={modalOpen} setModalOpen={setModalOpen} />
      <div className="form-item">
        <label>Title</label>
        <input
          placeholder="Give a name to your expenditure"
          value={title}
          onChange={handleTitle}
        />
      </div>
      <div className="form-item">
        <label>Amount रु</label>
        <input
          placeholder="Give your amount"
          value={amount}
          onChange={handleAmount}
          className="amount-input"
        />
      </div>
      <div className="category-container-parent">
        <div className="category">
          <div>
            <div
              className="category-dropdown"
              onClick={() => setCategoryOpen(!categoryOpen)}
            >
              <label>{category ? category.title : "Category"}</label>
              <i class="bi bi-chevron-compact-down"></i>
            </div>
            {categoryOpen && (
              <div className="category-container">
                {cat.map((category) => (
                  <div
                    className="category-item"
                    style={{ borderRight: `5px solid ${category.color}` }}
                    key={category.id}
                    onClick={() => handleCategory(category)}
                  >
                    <label>{category.title}</label>
                    <img src={category.icon} alt={category.title} />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="form-add-button">
        <div onClick={handleSubmit}>
          <label>Add</label>
          <i class="bi bi-plus-circle-fill"></i>
        </div>
      </div>
    </div>
  );
}
