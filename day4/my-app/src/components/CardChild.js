import React from "react";
import "./card.css";
const CardChild = (data) => {
  const {
    id,
    title,
    description,
    status,
    author,
    category,
    priority,
    date,
    onCardClick,
  } = data;
  return (
    <div>
      <div className="card_sep">
        <p>
          {id} :{title}
        </p>
        <h4>{description}</h4>
        <h5>
          Status: {status}, Author: {author},<br /> Ctegory: {category},
          Priority: {priority}, <br />
          Date: {date}
        </h5>
        <button onClick={onCardClick}>Click</button>
      </div>
    </div>
  );
};

export default CardChild;
