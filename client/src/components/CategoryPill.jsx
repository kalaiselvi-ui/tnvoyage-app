import React from "react";

const CategoryPill = ({ pillText, active = false, onClick }) => {
  return (
    <div>
      {pillText && (
        <button
          onClick={onClick}
          className={`px-4 py-2 rounded-full border hover:bg-primary hover:text-white transition ${active ? "bg-primary text-white" : "bg-white text-black"}`}
        >
          {pillText}
        </button>
      )}
    </div>
  );
};

export default CategoryPill;
