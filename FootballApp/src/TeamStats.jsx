import React, { useState, useEffect } from "react";
import { fetchData } from "./api/axios";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const TeamStats = () => {
  const [teams, setTeams] = useState([]);

  const getTeams = async () => {
    await fetchData("/teams", { league: "39", season: "2022" })
      .then((response) => {
        setTeams(response.data.response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    getTeams();
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
          {teams.map((team, i) => (
            <tr key={team.team.id}>
              <td>{i + 1}</td>
              <td>
                <img src={`${team.team.logo}`} alt="logo" />
              </td>
              <td>
                <Link
                  to={`/teams/${team.team.name}`}
                  state={{ id: `${team.team.id}` }}
                >
                  {team.team.name}
                </Link>
              </td>
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
