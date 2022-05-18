import React from "react";
import AddForm from "../../components/add-form/AddForm";
import Topfold from "../../components/topfold/Topfold";
import "./add-expense.css";

export default function AddExpense() {
  return (
    <div className="add-expense">
      <Topfold />
      <AddForm />
    </div>
  );
}
