import React, { useState, useEffect } from "react";
import { fetchData } from "./api/axios";

const TeamStats = () => {
  const [teamStats, setTeamStats] = useState(null);

  useEffect(() => {
    fetchData("/teams/statistics", { league: "20", season: "2020", team: "20" })
      .then((response) => {
        setTeamStats(response.data);
        console.log(teamStats.response.team.name);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return <></>;
};

export default TeamStats;
