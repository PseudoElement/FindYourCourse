import React from "react";
import { list, IListItem } from "./navBarData";
import ListItem from "./ListItem";
import ButtonBar from "./ButtonBar";

const Navbar = () => {
  return (
    <div className="navBar">
      <div className="navBar-title">
        <img src={require('../pics/Hat.png')} alt="LogoHat" />
        <div className="navBar-title_text">Careers</div>
      </div>
      <div className="navBar-list">
        {list.map((el: IListItem) => (
          <ListItem text={el.text} />
        ))}
      </div>
      <ButtonBar/>
    </div>
  );
};

export default Navbar;
