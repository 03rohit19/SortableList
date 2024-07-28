import React from "react";
import "./ListItems.css";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const ListItems = ({ id, title }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      className="task"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      <input type="checkbox" className="checkbox" />
      {title}
    </div>
  );
};

export default ListItems;
