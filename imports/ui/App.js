import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/";
import EventsContainer from "../ui/components/EventsContainer";
import VenueContainer from "../ui/containers/VenueContainer";
import ArtistContainer from "../ui/containers/ArtistContainer";

import { Events } from "../api";
import { withTracker } from "meteor/react-meteor-data";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Routes />
        </Router>
        <h1>VenMuse</h1>
        <EventsContainer events={this.props.events} />
      </React.Fragment>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe("events");
  Meteor.subscribe("users");
  return {
    events: Events.find({}).fetch()
  };
})(App);
