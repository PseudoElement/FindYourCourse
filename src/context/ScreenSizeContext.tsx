import React from "react";

interface IScreenSizeContext {
  isMobile: boolean;
}

const ScreenSizeContext = React.createContext({} as IScreenSizeContext);

export const useScreenSizeContext = () => React.useContext(ScreenSizeContext);

export const ScreenSizeContextProvider = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    window.innerWidth < 890 ? setIsMobile(true) : setIsMobile(false);
    window.addEventListener("resize", () => {
      window.innerWidth < 890 ? setIsMobile(true) : setIsMobile(false);
    });
  }, []);
  return (
    <ScreenSizeContext.Provider value={{ isMobile }}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
