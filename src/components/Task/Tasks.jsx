import React from "react";
import "./Task.css";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ListItems from "../ListItems/ListItems";

const Tasks = ({ todo }) => {
  return (
    <div className="column">
      {/* // we need to tell sortable context that which items to keep track of */}
      <SortableContext items={todo} strategy={verticalListSortingStrategy}>
        {todo.map((task) => (
          <ListItems id={task.id} title={task.title} key={task.id} />
        ))}
      </SortableContext>
    </div>
  );
};

export default Tasks;
