import { useRef } from "react";

import Card from "../../ui/Card/Card";

import classes from "./NewMeetupForm.module.css";

const { form, control, actions } = classes;

const NewMeetupForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const title = titleInputRef.current.value;
    const imgUrl = imageInputRef.current.value;
    const address = addressInputRef.current.value;
    const description = descInputRef.current.value;

    const meetupData = {
      title,
      imgUrl,
      address,
      description,
      favorite: false,
    };

    props.onAddMeetup(meetupData);
  };

  return (
    <Card>
      <form className={form} onSubmit={submitHandler}>
        <div className={control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" ref={titleInputRef} />
        </div>
        <div className={control}>
          <label htmlFor="image">Meetup Image (Url)</label>
          <input type="url" required id="image" ref={imageInputRef} />
        </div>
        <div className={control}>
          <label htmlFor="address">Meetup Adress</label>
          <input type="text" required id="address" ref={addressInputRef} />
        </div>
        <div className={control}>
          <label htmlFor="description">Meetup Description</label>
          <textarea required id="description" rows="5" ref={descInputRef} />
        </div>
        <div className={actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
