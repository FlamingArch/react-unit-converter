import React, { Children } from "react";

const TopBar = ({ children }) => {
  return (
    <div className="flex bg-slate-900 place-content-center place-items-center text-center">
      {children}
    </div>
  );
};

export default TopBar;
