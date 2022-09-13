import React, { useEffect, useState } from "react";
import "./BoardContent.scss";
import Column from "components/Column/Column";
import { mapOrder } from "utilities/sort";
import { isEmpty } from "lodash";

import { initialData } from "actions/initialData";

const BoardContent = () => {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    const boardFromDB = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDB) {
      setBoard(boardFromDB);

      // sort column

      // boardFromDB.columns.sort((a, b) => {
      //   //console.log("demo", boardFromDB.columnOrder.indexOf(a.id));
      //   return (
      //     boardFromDB.columnOrder.indexOf(a.id) -
      //     boardFromDB.columnOrder.indexOf(b.id)
      //   );
      // });
      // console.log("demo", boardFromDB.columns);
      mapOrder(boardFromDB.columns, boardFromDB.columnOrder, "id");
      setColumns(boardFromDB.columns);
    }
  }, []);
  // console.log(isEmpty(board));

  if (isEmpty(board)) {
    return <div className="not-found">Board not found!</div>;
  }
  return (
    <div className="board-content">
      {columns.map((column, index) => (
        <Column key={index} column={column} />
      ))}
    </div>
  );
};

export default BoardContent;
