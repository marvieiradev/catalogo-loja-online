import React from "react";

const Categoria = ({ title, color }) => {
  return (
    <button className={`flex py-1 px-2 rounded-full md:px-4 cursor-pointer ${!color ? "bg-primary/60" : color}`}>
      <p className="text-sm text-white lg:text-base">{title}</p>
    </button>
  );
};

export default Categoria;
