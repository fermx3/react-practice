import Card from "../../ui/Card/Card";

import classes from "./MeetupItem.module.css";

const { item, image, content, actions } = classes;

const MeetupItem = ({ entry }) => {
  const { imgUrl, title, address, description } = entry;

  return (
    <li className={item}>
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
          <button>To Favorites</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
