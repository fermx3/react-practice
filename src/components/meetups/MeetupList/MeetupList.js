import MeetupItem from "../MeetupItem/MeetupItem";

import classes from "./MeetupList.module.css";

const MeetupList = ({ entries }) => {
  return (
    <div className={classes.list}>
      {entries.map((entry) => (
        <MeetupItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

export default MeetupList;
