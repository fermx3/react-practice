import { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList/MeetupList";

import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  const favoritesCount = favorites === undefined ? 0 : favorites.length;

  return (
    <section>
      <h1>Favorite Meetups</h1>
      {!favoritesCount ? (
        <p>You don't have any favorites. Start adding some.</p>
      ) : (
        <MeetupList meetups={favorites} />
      )}
    </section>
  );
};

export default Favorites;
