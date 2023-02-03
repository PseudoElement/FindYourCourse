import React from "react";
import { IListItem } from "./navBarData";
import uuid from "uuid-random";
import { useScreenSizeContext } from "../../../context/ScreenSizeContext";

const ListItem = ({ title, body }: IListItem) => {
    const [isOpenSubList, setIsOpenSubList] = React.useState(false);
    const listItemTitleRef = React.useRef<HTMLDivElement | null>(null);
    const { isMobile } = useScreenSizeContext();

    React.useEffect(() => {
        !isMobile
            ? listItemTitleRef.current?.classList.add("desktopHover")
            : listItemTitleRef.current?.classList.remove("desktopHover");
    }, [isMobile]);
    return (
        <div className="listItem">
            <div
                ref={listItemTitleRef}
                onClick={() => setIsOpenSubList((prev) => !prev)}
                className="listItem-title"
            >
                <div
                    className="listItem-title_text"
                    style={{ color: isOpenSubList ? "#259609" : "#3E3E3E" }}
                >
                    {title}
                </div>
                <svg
                    className="listItem-title_arrow"
                    style={{
                        transform: isOpenSubList
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
                        stroke={isOpenSubList ? "#259609" : "#3E3E3E"}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>
            <ul
                style={{
                    display: isOpenSubList ? "flex" : "none",
                }}
                className="listItem-sublist"
            >
                {body.map((text: string) => (
                    <li key={uuid()} className="listItem-sublist_li">
                        {text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListItem;
