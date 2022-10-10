import MeetupItem from "../MeetupItem/MeetupItem";

import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => {
  return (
    <div className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem key={meetup.id} meetup={meetup} />
      ))}
    </div>
  );
};

export default MeetupList;
