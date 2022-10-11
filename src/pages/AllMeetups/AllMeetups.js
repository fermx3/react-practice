import { useContext } from "react";

import MeetupsContext from "../../store/meetups-context";

import MeetupList from "../../components/meetups/MeetupList/MeetupList";
import LoadingSpinner from "../../components/ui/LoadingSpinner/LoadingSpinner";

const AllMeetups = () => {
  const { meetups } = useContext(MeetupsContext);

  if (!meetups.length) {
    return (
      <section>
        <LoadingSpinner />
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={meetups} />
    </section>
  );
};

export default AllMeetups;
