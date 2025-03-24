import React from "react";

const Categoria = ({ title, color }) => {
  return (
    <button className={`flex py-1 px-2 rounded-full md:px-4 cursor-pointer ${!color ? "bg-purple/10" : color}`}>
      <p className={`text-sm lg:text-base font-semibold ${!color ? "text-black" : "text-white"}`}>{title}</p>
    </button>
  );
};

export default Categoria;
