import React from "react";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Card from "./Card";
import "./expense-list.css";

export default function ExpenseList() {
  const { expenseList: list, query } = useSelector((state) => state.expenses);
  const filteredList = list.filter((item) => item.title.includes(query));

  const notifySuccess = () => toast.success("Expense deleted successfully");

  return (
    <div className="expense-list">
      <ToastContainer
        position="bottom-left"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
      />
      {filteredList.length ? (
        filteredList.map((item) => (
          <Card item={item} notifySuccess={notifySuccess} />
        ))
      ) : (
        <div className="empty-state">
          <img
            src={require("../../assets/images/empty.png")}
            alt="Empty List"
            className="empty-image"
          />
          <label>Your expense list is empty</label>
        </div>
      )}
    </div>
  );
}
