import React from 'react';

const SideCard = ({showAll }) => {
  const { title } = showAll;
    return (
      <div className="shadow-slate-200 bg-white p-4 rounded-md mt-4">
      <h2 className="font-bold">{title}</h2>
    </div>
    );
};

export default SideCard;