import { useContext } from "react";
import FavoritesContext from "../../../store/favorites-context";

import Card from "../../ui/Card/Card";

import classes from "./MeetupItem.module.css";

const { item, image, content, actions } = classes;

const MeetupItem = ({ meetup }) => {
  const { itemIsFavorite, removeFavorite, addFavorite } =
    useContext(FavoritesContext);
  const isFavorite = itemIsFavorite(meetup.id);

  const toggleFavoriteStatusHandler = () => {
    if (isFavorite) {
      removeFavorite(meetup.id);
    } else {
      addFavorite(meetup);
    }
  };

  const { imgUrl, title, address, description } = meetup;

  return (
    <div className={item}>
      <Card>
        <div className={image}>
          <img src={imgUrl} alt={title} />
        </div>
        <div className={content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isFavorite ? "Remove Favorite" : "To Favorites"}
          </button>
        </div>
      </Card>
    </div>
  );
};

export default MeetupItem;
