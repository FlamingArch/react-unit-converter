import React from "react";

const List = ({ children }) => {
  return (
    <div className="flex flex-col w-screen overflow-scroll relative list-round">
      {children}
    </div>
  );
};

export default List;
