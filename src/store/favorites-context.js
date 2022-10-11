import { createContext, useEffect, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  favoritesCount: 0,
  addFavorite: (meetupId) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://react-test-2d525-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const favorites = [];

        for (const key in data) {
          const favorite = {
            id: key,
            ...data[key],
          };

          if (favorite.favorite) {
            favorites.unshift(favorite);
          }
        }

        setFavorites(favorites);
        
      });
  }, [favorites]);

  const addFavoriteHandler = (meetupId) => {
    setFavorites(() => {
      fetch(
        `https://react-test-2d525-default-rtdb.firebaseio.com/meetups/${meetupId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ favorite: true }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  };

  const removeFavoriteHandler = (meetupId) => {
    setFavorites(() => {
      fetch(
        `https://react-test-2d525-default-rtdb.firebaseio.com/meetups/${meetupId}.json`,
        {
          method: "PATCH",
          body: JSON.stringify({ favorite: false }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    });
  };

  const context = {
    favorites,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
