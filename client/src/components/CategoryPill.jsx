import React from "react";

const CategoryPill = ({ pillText }) => {
  return (
    <div>
      {pillText && (
        <button className="px-4 py-2 rounded-full border hover:bg-primary hover:text-white transition ">
          {pillText}
        </button>
      )}
    </div>
  );
};

export default CategoryPill;
