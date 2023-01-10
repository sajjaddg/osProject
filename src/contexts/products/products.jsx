import { createContext, useEffect, useState } from "react";
const product = [
  {
    name:'Pizza',
    id: 1,
    cookingTime: 8,
  },
  {
    name:'Burger',
    id: 2,
    cookingTime: 6,
  },
  {
    name:'HotDog',
    id: 3,
    cookingTime: 5,
  },
  {
    name:'Salad',
    id: 4,
    cookingTime: 2,
  },
  {
    name:'Sandwich',
    id: 5,
    cookingTime: 4,
  }
];
const ProductsContext = createContext({
  products: [],
  setProducts: () => {},
  cards: [],
  setCards: () => {},
  index:0,
  
});
const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([...product]);
  const [cards, setCards] = useState([]);
  const [index,setIndex] = useState(0)
  const val = {
    products,
    setProducts,
    cards,
    setCards,
    index,
    setIndex
  };
  useEffect(()=>{
    console.log(cards);
  },[cards])
  return (
    <ProductsContext.Provider value={val}>{children}</ProductsContext.Provider>
  );
};
export { ProductsContext, ProductsProvider };
