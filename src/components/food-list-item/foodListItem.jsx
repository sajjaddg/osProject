import { useEffect, useState } from "react";

const FoodItem = ({item,addItem , removeItem,reset,setReset}) => {
    const [count,setCount] = useState(0)
    const handlePlusClick =()=>{
        addItem(item)
        setCount(count+1)
    }
    const handleMinzeClick =()=>{
        removeItem(item)
        setCount(count-1)
    }
    useEffect(()=>{
      if(reset){
        setCount(0)
        setReset(false)
      }
    },[reset])
  return (
    <div className="flex justify-between items-center hover:bg-[#ebebebfa] transition-colors duration-300 rounded-lg p-3">
      <span className="text-2xl font-medium uppercase">{item.name}</span>
      <div className="flex space-x-3 items-center">
        <button onClick={handleMinzeClick} disabled={count<1} className="bg-[#243B55] disabled:opacity-75 text-white w-8 h-8 rounded-md">
          -
        </button>
        <span className="text-lg w-3 text-center">{count}</span>
        <button onClick={handlePlusClick} className="bg-[#243B55] text-white w-8 h-8 rounded-md">
          +
        </button>
      </div>
    </div>
  );
};

export default FoodItem;
