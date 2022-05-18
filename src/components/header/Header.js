import React from "react";
import "./header.css";

export default function Header() {
  return (
    <div className="header-container">
      <div className="header">
        <div className="header-logo">
          Expense Tracker
          <i class="bi bi-credit-card" />
        </div>
        <div className="header-button">
          <a href="https://github.com" target="_blank" rel="">
            <i class="bi bi-github"></i>Star
          </a>
        </div>
      </div>
    </div>
  );
}
