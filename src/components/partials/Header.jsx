import React from "react";

import {Link} from "react-router-dom";
import "./Header.css";

const Header =  ({onLayoutToggle, isListView, onRefresh}) => {
  const text = isListView ? <i className=" material-icons">view_module</i> : <i className="material-icons">view_list</i>;
return(
<nav>
<div className="nav-wrapper pointer">
<label className="brand-logo">Bit Persons</label>
      <ul className="right hide-on-med-and-down">
      <li onClick = {onLayoutToggle}>{text}</li>
        <li><Link to = "/home">Home</Link></li>
        <li><i onClick = {onRefresh} className="material-icons">refresh</i></li>
        <li><Link to = "/about/About">About</Link></li>
      </ul>

</div>

</nav>


)
}

export default Header;