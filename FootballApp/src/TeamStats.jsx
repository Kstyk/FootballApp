import React, { useState, useEffect } from "react";
import { fetchData } from "./api/axios";
import { Table } from "react-bootstrap";

const TeamStats = () => {
  const [teamStats, setTeamStats] = useState([]);

  useEffect(() => {
    fetchData("/teams", { league: "39", season: "2022" })
      .then((response) => {
        setTeamStats(response.data.response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Lp.</th>
            <th>Logo</th>
            <th>Nazwa</th>
            <th>Rok założenia</th>
            <th>Stadion</th>
          </tr>
        </thead>
        <tbody>
          {teamStats.map((team, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>
                <img src={`${team.team.logo}`} alt="logo" />
              </td>
              <td>{team.team.name}</td>
              <td>{team.team.founded}</td>
              <td>{team.venue.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {/* <div>{JSON.stringify(teamStats, null, 4)}</div> */}
    </>
  );
};

export default TeamStats;
