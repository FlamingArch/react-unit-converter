import { createContext, useContext, useState } from "react";

export const TabViewContext = createContext();

import React from "react";

export const TabViewProvider = ({ children }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <TabViewContext.Provider
      value={{
        selectedIndex: selectedIndex,
        setSelectedIndex: setSelectedIndex,
      }}
    >
      {children}
    </TabViewContext.Provider>
  );
};

export const TabBar = ({ children }) => {
  return <div className="tabbar">{children}</div>;
};

export const Tab = ({ icon, index }) => {
  const { selectedIndex, setSelectedIndex } = useContext(TabViewContext);

  return (
    <div
      className={`tab ${index == selectedIndex ? "selected" : "tabHover"}`}
      onClick={() => setSelectedIndex(index)}
    >
      {icon}
    </div>
  );
};

export const TabView = ({ children }) => {
  const { selectedIndex } = useContext(TabViewContext);

  return children[selectedIndex];
};

export default TabBar;
