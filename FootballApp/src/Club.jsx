import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Tab, Tabs } from "react-bootstrap";
import "./club.css";
import { fetchData } from "./api/axios";
import { useNavigate, useLocation } from "react-router-dom";

const Club = () => {
  let { club } = useParams();
  const [isLoading, setisLoading] = useState(true);
  const [clubInfo, setClubInfo] = useState(null);
  const [stadionInfo, setStadionInfo] = useState(null);

  const location = useLocation();
  const { id } = location.state;

  const getTeam = async () => {
    await fetchData("/teams", { id })
      .then((response) => {
        setClubInfo(response.data.response[0].team);
        setStadionInfo(response.data.response[0].venue);
        setisLoading(false);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getTeam();
  }, []);

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Tabs defaultActiveKey="profile" id="fill-tab-example" className="mb-3">
        <Tab eventKey="home" title="O klubie">
          <div className="club">
            <div className="left">
              <h1>{clubInfo.name}</h1>
              <img src={`${clubInfo.logo}`} alt="logo" />
            </div>
            <div className="right">Założony w: {clubInfo.founded}</div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="O stadionie">
          <h1>{stadionInfo.name}</h1>
          <h3>
            {stadionInfo.address}, {stadionInfo.city}
          </h3>
          <p>Pojemność: {stadionInfo.capacity}</p>
          <img src={`${stadionInfo.image}`} alt="stadion" />
        </Tab>
      </Tabs>
      <button onClick={() => navigate(-1)}>Powróć</button>
    </>
  );
};

export default Club;
