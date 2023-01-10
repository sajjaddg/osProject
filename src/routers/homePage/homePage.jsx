import CardList from "../../components/card-list/cardList";
import FoodList from "../../components/food-list/foodList";

const HomePage = () => {
  return (
    <>
      <div className="flex">
        <FoodList />
      </div>
      <div className="flex ">
        <CardList />
      </div>
    </>
  );
};

export default HomePage;
