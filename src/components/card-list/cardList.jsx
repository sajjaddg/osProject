import { useContext } from "react";
import CardItem from "../card-item/card-item";
import { ProductsContext } from "../../contexts/products/products";
import { Link } from "react-router-dom";
const CardList = () => {
  const { cards } = useContext(ProductsContext);
  return (
    <div className="flex flex-col space-y-5 h-full justify-start">
      {cards.map((item, index) => {
        return <CardItem key={index} item={item} />;
      })}
      {cards.length > 0 && (
        <button className="p-3 w-full rounded-lg uppercase text-xl font-medium bg-[#f7f7f7] ">
          <Link to={'/calculate'}>Caculate</Link>
        </button>
      )}
    </div>
  );
};

export default CardList;
