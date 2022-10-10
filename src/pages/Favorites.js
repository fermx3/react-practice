import { useContext } from "react";

import MeetupList from "../components/meetups/MeetupList/MeetupList";

import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const { favorites, totalFavorites } = useContext(FavoritesContext);

  return (
    <section>
      <h1>Favorite Meetups</h1>
      {!totalFavorites ? (
        <p>You don't have any favorites. Start adding some.</p>
      ) : (
        <MeetupList meetups={favorites} />
      )}
    </section>
  );
};

export default Favorites;
