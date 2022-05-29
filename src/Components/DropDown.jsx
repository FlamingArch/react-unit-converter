import React from "react";

const DropDown = ({ visible, items }) => {
  const dropdown_item_style =
    "p-1 px-2 m-1 mx-2 hover:bg-blue-600 hover:text-white hover:shadow-xl rounded-xl fixed";

  return (
    visible && (
      <div className="fixed z-100 flex flex-col bg-white rounded-xl p-2 shadow-2xl">
        {items.map((e, idx) => (
          <p
            className="px-4 py-2 hover:bg-blue-500 rounded-lg hover:shadow-xl hover:text-white"
            key={idx}
            onClick={e.action}
          >
            {e.label}
          </p>
        ))}
      </div>
    )
  );
};

export default DropDown;
