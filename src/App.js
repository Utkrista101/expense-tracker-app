import "./App.css";
import Home from "./pages/home";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddExpense from "./pages/add-expense/AddExpense";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add-expense" element={<AddExpense />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
