import moment from "moment";
import React from "react";
import { useDispatch } from "react-redux";
import "./card.css";
import { deleteExpense } from "../../redux/actions/expenses";

export default function Card({ item, notifySuccess }) {
  const time = moment(item.createdAt).fromNow();
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteExpense(item));
    notifySuccess();
  };

  return (
    <div
      className="card"
      style={{ borderRight: `6px solid ${item.category.color}` }}
    >
      <div className="card-image-container">
        <img
          src={item.category.icon}
          alt={item.category.title}
          className="card-image"
        />
      </div>
      <div className="card-info">
        <label className="card-title">{item.title}</label>
        <label className="card-time">{time}</label>
      </div>
      <div className="card-right">
        <div>
          <label className="card-amount">रु {item.amount}</label>
        </div>
        <div className="delete-icon" onClick={handleDelete}>
          <i class="bi bi-trash"></i>
        </div>
      </div>
    </div>
  );
}
