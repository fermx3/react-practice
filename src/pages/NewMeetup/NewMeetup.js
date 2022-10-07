import { useNavigate } from "react-router-dom";

import NewMeetupForm from "../../components/meetups/NewMeetupForm/NewMeetupForm";

import classes from './NewMeetup.module.css'

const NewMeetup = () => {
  const navigate = useNavigate();

  const addMeetupHandler = (meetupData) => {
    fetch("https://react-test-2d525-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1 className={classes.centeredTitle}>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
