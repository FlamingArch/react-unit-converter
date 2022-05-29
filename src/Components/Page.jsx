import React from "react";

const Page = ({ children }) => {
  return (
    <div className="grid page bg-slate-100 text-slate-800 grid-rows-2 place-content-center h-screen w-screen">
      {children}
    </div>
  );
};

export default Page;
