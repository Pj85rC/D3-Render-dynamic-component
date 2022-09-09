import React from "react";
import "./navBar.css";

const NavBar = ({ title, setFilter }) => {
  const captureFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <nav className="navBar">
      <h2 className="title">{title}</h2>
      
      <input
        className="search"
        type="text"
        name="filter"
        onChange={captureFilter}
        placeholder="Buscar un colaborador..."
      />
      
    </nav>
  );
};

export default NavBar;
