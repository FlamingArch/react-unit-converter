import React from "react";

const DropDown = ({ visible, items }) => {
  const dropdown_item_style =
    "p-1 px-2 m-1 mx-2 hover:bg-blue-600 hover:text-white hover:shadow-xl rounded-xl fixed";

  return (
    <div
      className={
        "fixed flex flex-col shadow-xl rounded-xl overflow-clip" +
        visible
          ? ""
          : "hidden"
      }
    >
      {items.map((e, idx) => (
        <p className={dropdown_item_style} onClick={e.action} key={idx}>
          {e.label}
        </p>
      ))}
    </div>
  );
};

export default DropDown;
