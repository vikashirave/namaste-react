import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  if (resInfo === null) return <Shimmer />;

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=1003414&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    //console.log(json);
    setResInfo(json.data);
  };

  return (
    <div className="menu">
      <h1>Name of the restaunt</h1>
      <h2>Menu</h2>
    </div>
  );
};

export default RestaurantMenu;
