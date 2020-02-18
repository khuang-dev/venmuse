import React from "react";
import { useParams } from "react-router-dom";
import SubmitEvent from "../../components/SubmitEvent";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../../../api";
import { Artists } from "../../../api";
import { Venues } from "../../../api";
import Single from "./Single";

const SinglePage = ({ events, users }) => {
  let { id } = useParams();

  return <Single id={id} />;
};

export default SinglePage;
