import { useEffect, useState } from 'react';
import Algoritmitem from '../algoritm-Item/algoritm-item';
import { RR } from '../../utils/algorithms/algorithms';

const Rr = ({algoritmItems}) => {
  const [item,setItem]=useState([])
  useEffect(()=>{
    setItem(RR(algoritmItems,5))
  },[algoritmItems])
  return (
    <div className="flex flex-col w-96 space-y-5 p-2">
      <h3 className="text-3xl font-semibold text-center">RR</h3>
      {item.map((item,i)=><Algoritmitem key={i} item={item}/>)}
    </div>
    )
}

export default Rr