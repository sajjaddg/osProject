import { useContext, useState } from "react";
import FoodItem from "../food-list-item/foodListItem";
import { ProductsContext } from "../../contexts/products/products";

const FoodList = () => {
  const { products , setCards , index ,setIndex } = useContext(ProductsContext);
  const [items, setItems] = useState([]);
  const [reset,setReset] = useState(false)
  const [cardName, setCardName] = useState("");
  const addItem = (item) => {
    setItems((old) => [...old, item]);
  };
  const removeItem = (item) => {
    let index = items.findIndex((el) => el.id === item.id);
    let copy =JSON.parse(JSON.stringify(items));
    copy.splice(index, 1);
    setItems(copy);
  };
  const addClick =()=>{
      const newCard = {
        time:index,
        items,
        cardName
      }
      setIndex(index+1)
      setCards((old)=>[...old,newCard])
      setItems([])
      setCardName('')
      setReset(true)
  }
  return (
    
      <div className="p-6 bg-[#f7f7f7] rounded-lg flex space-y-4 flex-col shadow-md">
        <h2 className="text-4xl font-semibold uppercase">Create food list</h2>
        <input
          type="text"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          placeholder="Order Name"
          className=" px-3 py-2 rounded-lg outline-[#243B55]"
        />
        <div className="flex flex-col space-y-2">
          {products.map((item) => {
            return (
              <FoodItem
                key={item.id}
                reset={reset}
                setReset={setReset}
                item={item}
                removeItem={removeItem}
                addItem={addItem}
              />
            );
          })}
        </div>
        <button onClick={addClick} className="p-3 w-full rounded-xl uppercase text-xl font-medium bg-[#243B55] text-white">
          add to card
        </button>
      </div>

  );
};

export default FoodList;
