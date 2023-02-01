import React from "react";
import { IListItem, ISubListItem, SubList } from "./navBarData";

const ListItem = ({ text }: IListItem) => {
  const [isOpenSubList, setIsOpenSubList] = React.useState(false);

  return (
    <div className="listItem">
      <div
        onClick={() => setIsOpenSubList((prev) => !prev)}
        className="listItem-title"
      >
        <div
          className="listItem-title_text"
          style={{ color: isOpenSubList ? "#259609" : "#3E3E3E" }}
        >
          {text}
        </div>
        <svg
          className="listItem-title_arrow"
          style={{
            transform: isOpenSubList ? "rotate(90deg)" : "rotate(0deg)",
          }}
          width="7"
          height="12"
          viewBox="0 0 7 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.777344 11L5.77734 6L0.777343 1"
            stroke={isOpenSubList ? "#259609" : "#3E3E3E"}
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      <ul
        style={{
          display: isOpenSubList ? "flex" : "none",
        }}
        className="listItem-sublist"
      >
        {SubList.map((el: ISubListItem) => (
          <li className="listItem-sublist_li">{el.text}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
