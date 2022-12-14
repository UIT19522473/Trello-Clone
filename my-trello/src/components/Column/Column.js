import React from "react";
import "./Column.scss";
import Card from "components/Card/Card";
import { mapOrder } from "utilities/sort";

const Column = (props) => {
  const { column } = props;
  // const cards = column.cards;
  const cards = mapOrder(column.cards, column.cardOrder, "id");

  return (
    <div className="column">
      <header>{column.title}</header>
      <ul className="card-list">
        {cards.map((card, index) => (
          <Card card={card} key={index} />
        ))}
      </ul>
      <footer>Add another card</footer>
    </div>
  );
};

export default Column;
