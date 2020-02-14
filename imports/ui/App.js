import React from "react";
import EventsCard from "../ui/components/EventsCard";
import VenueCard from "../ui/components/VenueCard";
import { Events } from "../api";
import { withTracker } from "meteor/react-meteor-data";
// import { Meteor } from "meteor/meteor";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log(this.props);
    return (
      <React.Fragment>
        <h1>VenMuse</h1>
        <EventsCard />
        <VenueCard venues={this.props.users}/>
      </React.Fragment>
    );
  }
}

export default withTracker(() => {
  Meteor.subscribe('events');
  Meteor.subscribe('users');
  return {
    events: Events.find({}).fetch(),
    users: Meteor.users.find({}).fetch(),
    currentUsers: Meteor.user(),
    userId: Meteor.userId()
  };
})(App);
