import { Route, Routes } from "react-router-dom";
import AllMeetups from "./pages/AllMeetups/AllMeetups";
import Favorites from "./pages/Favorites";
import Navigation from "./pages/Navigation/Navigation";
import NewMeetup from "./pages/NewMeetup/NewMeetup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<AllMeetups />} />
        <Route path="new-meetup" element={<NewMeetup />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default App;
