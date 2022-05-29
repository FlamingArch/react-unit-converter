import React from "react";

export function Card({ heading, content, children }) {
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

export function InputCard({ text, onChange, children }) {
  return (
    <div className="flex justify-between border-2 border-transparent focus-within:shadow-md px-3 py-2 bg-white z-10 transition-all hover:shadow-lg fixed w-full overflow-clip">
      {children}
      <input
        className="w-full bg-transparent outline-none text-right"
        type="number"
        value={text}
        onChange={onChange}
      />
    </div>
  );
}
