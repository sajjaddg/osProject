import "./App.css";
import CardList from "./components/card-list/cardList";
import FoodList from "./components/food-list/foodList";
const myprocses = [
  {
    index: 1,
    name: "p1",
    arival: 0,
    time: 4,
    waiting: 0,
    responseTime: 0,
  },
  {
    index: 2,
    name: "p2",
    arival: 2,
    time: 6,
    waiting: 0,
    responseTime: 0,
  },
  {
    index: 3,
    name: "p3",
    arival: 1,
    time: 7,
    waiting: 0,
    responseTime: 0,
  },
  {
    index: 4,
    name: "p4",
    arival: 2,
    time: 4,
    waiting: 0,
    responseTime: 0,
  },
];
function App() {
  return (
    <div className="flex min-h-screen  justify-center items-center space-x-6 bg-gradient-to-b from-[#141E30] to-[#243B55]">
      <div className="flex">
        <FoodList />
      </div>
      <div className="flex ">
        <CardList />
      </div>
    </div>
  );
}

export default App;
