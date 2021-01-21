import React, { useState, useEffect } from "react";
import "./styles/App.scss";
import Hero from "./pages/Hero";
import { Route, Switch } from "react-router-dom";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Items from "./data/Details";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRooms";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Reservation from "./component/Reservation";

function App() {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
  });

  useEffect(() => {
    let rooms = formatData(Items);
    let featuredRooms = rooms.filter((room) => room.featured === true);
    setState({
      ...state,
      rooms,
      featuredRooms,
      sortedRooms: rooms,
    });
  }, []);

  const formatData = (Items) => {
    let tempItems = Items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map(
        (image, index) => image.fields.file.url
      );
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  };

  return (
    <div className="App">
      <Navbar />

      <Switch>
        <Route exact path="/" component={Hero} />
        <Route exact path="/rooms/:slug">
          <SingleRoom state={state} />
        </Route>
        <Route exact path="/rooms">
          <Rooms state={state} />
        </Route>
        <Route exact path="/reservation" component={Reservation} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
