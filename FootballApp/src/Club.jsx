import { useParams } from "react-router-dom";
import React from "react";

const Club = () => {
  let { club } = useParams();
  return <div>Name: {club}</div>;
};

export default Club;
