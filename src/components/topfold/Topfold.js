import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { searchExpense } from "../../redux/actions/expenses";
import "./topfold.css";

export default function Topfold() {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const handleQuery = (e) => {
    setQuery(e.target.value);
    dispatch(searchExpense(e.target.value));
  };

  return (
    <div className="topfold">
      {window.location.pathname === "/" ? (
        <div className="home-topfold">
          <div className="searchbar">
            <i className="bi bi-search"></i>
            <input
              placeholder="Search for expenses"
              value={query}
              onChange={(e) => handleQuery(e)}
            />
          </div>

          <Link to="/add-expense">
            <div className="add-button">
              <i className="bi bi-plus-circle"></i>
              <label>Add</label>
            </div>
          </Link>
        </div>
      ) : (
        <div className="add-topfold">
          <Link to="/">
            <div className="add-topfold-button">
              <i class="bi bi-caret-left"></i>
              <label>Back</label>
            </div>
          </Link>
          <div>
            <Link to="/">
              <div className="add-topfold-button">
                <i class="bi bi-x-circle"></i>
                <label>Cancel</label>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
