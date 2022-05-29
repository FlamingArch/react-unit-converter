import React from "react";

function Card({ heading, content }) {
  return (
    <div
      style={{ width: "clamp(100px, auto, 600px)" }}
      className="flex justify-between bg-white px-4 py-3 transition-all hover:shadow-lg"
    >
      <div className="font-medium">{heading}</div>
      <div className="">{content}</div>
    </div>
  );
}

export default Card