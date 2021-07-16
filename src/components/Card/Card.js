import React from "react";
import "./Card.css";


const Card = (props) => {
  const extraClass = "card " + props.className;
  return <div className={extraClass}>{props.children}</div>; 
}


export default Card;
