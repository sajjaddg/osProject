import { useContext, useState } from "react";
import Fcfs from "../../components/fcfs/fcfs";
import Rr from "../../components/rr/rr";
import { ProductsContext } from "../../contexts/products/products";

const CalculatePage = () => {
  const [selectAlgoritm, setSelectAlgoritm] = useState(0);
  const [algoritmItems, setAlgoritmItems] = useState([]);

  const { cards } = useContext(ProductsContext);

  const handleFCFSClicked = () => {
    setAlgoritmItems([])
    cards.map((card) => {
      card.items.map((item) => {
        let x = {
          cardName: card.cardName,
          name: item.name,
          time: item.cookingTime,
          arival: card.time,
          waiting: 0,
          responseTime: 0,
        };
        setAlgoritmItems((old) => [...old, x]);
      });
    });
    setSelectAlgoritm(1);
  };
  const handleRRClicked = () => {
    setAlgoritmItems([])
    cards.map((card) => {
      card.items.map((item) => {
        let x = {
          cardName: card.cardName,
          name: item.name,
          time: item.cookingTime,
          arival: card.time,
          waiting: 0,
          responseTime: 0,
        };
        setAlgoritmItems((old) => [...old, x]);
      });
    });
    setSelectAlgoritm(2);
  };
  return (
    <div className="flex flex-col items-center space-y-4 bg-[#f7f7f7] rounded-lg p-6">
      {selectAlgoritm === 0 && (
        <>
          <h2 className="text-2xl font-semibold uppercase">select algoritm</h2>

          <div className="flex w-full space-x-3 justify-between">
            <button
              onClick={handleFCFSClicked}
              className="p-3 w-full rounded-xl uppercase text-xl font-medium bg-[#243B55] text-white"
            >
              FCFS
            </button>
            <button
              onClick={handleRRClicked}
              className="p-3 w-full rounded-xl uppercase text-xl font-medium bg-[#243B55] text-white"
            >
              RR
            </button>
          </div>
        </>
      )}
      {selectAlgoritm === 1 && <Fcfs algoritmItems={algoritmItems} />}

      {selectAlgoritm === 2 && <Rr algoritmItems={algoritmItems} />}
    </div>
  );
};

export default CalculatePage;
