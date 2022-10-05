import MeetupList from "../../components/meetups/MeetupList/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    imgUrl: "https://picsum.photos/700/500?random=1",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    imgUrl: "https://picsum.photos/700/500?random=2",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetups = () => {
  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList entries={DUMMY_DATA} />
    </section>
  );
};

export default AllMeetups;
