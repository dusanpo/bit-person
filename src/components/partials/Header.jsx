import React from "react";
import "./Header.css";

const Header =  ({onLayoutToggle, isListView, onRefresh}) => {
  const text = isListView ? <i className=" material-icons">view_module</i> : <i className="material-icons">view_list</i>;
return(
<nav>
<div className="nav-wrapper pointer">
<label className="brand-logo">Bit Persons</label>
      <ul className="right hide-on-med-and-down">
      <li onClick = {onLayoutToggle}>{text}</li>
        <li><a href="sass.html">Home</a></li>
        <li><i onClick = {onRefresh} className="material-icons">refresh</i></li>
        <li><a href="collapsible.html">About</a></li>
      </ul>

</div>

</nav>


)
}

export default Header;