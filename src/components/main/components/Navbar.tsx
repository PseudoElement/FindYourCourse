import React from "react";
import { list, IListItem } from "./navBarData";
import ListItem from "./ListItem";
import ButtonBar from "./ButtonBar";
import uuid from "uuid-random";
import Hat from "../pics/Hat.png";
import { useScreenSizeContext } from "../../../context/ScreenSizeContext";

type StylesMobile = Record<"display" | "color", string>;

const Navbar = () => {
    const { isMobile } = useScreenSizeContext();
    const [isOpenNavBar, setIsOpenNavBar] = React.useState(false);

    const stylesMobile: StylesMobile = {
        display: isOpenNavBar ? "block" : "none",
        color: isOpenNavBar ? "#259609" : "#3E3E3E",
    };

    const toggleList = () => {
        isMobile && setIsOpenNavBar((prev) => !prev);
    };

    return (
        <div className="navBar" id="navBar">
            <div onClick={toggleList} className="navBar-title">
                <img src={Hat} alt="LogoHat" />
                <div
                    className="navBar-title_text"
                    style={{ color: isMobile ? stylesMobile.color : "#259609" }}
                >
                    {isMobile ? "Choose your career" : "Careers"}
                </div>
            </div>

            {isMobile && (
                <svg
                    onClick={() => setIsOpenNavBar((prev) => !prev)}
                    className="navBar-arrow"
                    style={{
                        transform: isOpenNavBar
                            ? "rotate(90deg)"
                            : "rotate(0deg)",
                    }}
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M0.777344 11L5.77734 6L0.777343 1"
                        stroke={isOpenNavBar ? "#259609" : "#3E3E3E"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            )}
            <div
                className="navBar-list"
                style={{ display: isMobile ? stylesMobile.display : "block" }}
            >
                {list.map((el: IListItem) => (
                    <ListItem key={uuid()} title={el.title} body={el.body} />
                ))}
            </div>
            <ButtonBar />
        </div>
    );
};

export default Navbar;
