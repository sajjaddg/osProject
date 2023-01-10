import React from "react";

const Algoritmitem = ({item}) => {
  return (
    <div className="flex flex-col border border-2 text-3xl space-y-2 hover:bg-[#ebebebfa] transition-colors duration-300 rounded-lg p-3 px-5">
      <div className="flex space-x-2">
        <span>Order Name:</span>
        <span className="font-semibold">{item.cardName}</span>
      </div>
      <div className="flex space-x-2">
        <span>Name:</span>
        <span className="font-semibold">{item.name}</span>
      </div>
      <div className="flex space-x-2">
        <span>R time:</span>
        <span  className="font-semibold">{item.responseTime}</span>
      </div>
      <div className="flex space-x-2">
        <span>W time:</span>
        <span className="font-semibold">{item.waiting}</span>
      </div>
    </div>
  );
};

export default Algoritmitem;
