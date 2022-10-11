import { createContext, useEffect, useState } from "react";

const MeetupsContext = createContext({
  meetups: [],
  setMeetups: () => {},
});

export const MeetupsContextProvider = ({ children }) => {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    fetch("https://react-test-2d525-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => response.json())
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key],
          };

          meetups.unshift(meetup);
        }

        setMeetups(meetups);
      });
  }, [meetups]);

  const context = {
    meetups,
  };

  return (
    <MeetupsContext.Provider value={context}>
      {children}
    </MeetupsContext.Provider>
  );
};

export default MeetupsContext;
