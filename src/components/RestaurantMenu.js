import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const {resId} = useParams();
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const {name, cuisines, costForTwoMessage, avgRatingString} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>{costForTwoMessage}</h3>
      <h3>{avgRatingString}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((resto) =>(
          <li key={resto.card.info.id}>{resto.card.info.name} {"Rs. "}  {resto.card.info.price / 100 | resto.card.info.defaultPrice / 100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
