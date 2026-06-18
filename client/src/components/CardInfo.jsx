import React from "react";

const CardInfo = ({ label, content }) => {
  return (
    <div className="bg-white/90 rounded-xl p-5 shadow-xl border border-green">
      <h4 className="text-lg text-green font-bold">{label}</h4>
      <p className="text-black">{content}</p>
    </div>
  );
};

export default CardInfo;
