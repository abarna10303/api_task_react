import React from "react";
import { useSelector } from "react-redux";
import '../index.scss'
import Link from "@mui/material/Link";
const Details = () => {
  const missionValue = useSelector(({ missiondatas }) => missiondatas);
  var missoinValue2 = missionValue.missions;
  console.log(missoinValue2);
  return (
      <div className="container-view">
        <div className="viewDetails">
          <h2>{missoinValue2[0].mission_name}</h2>
          <div className="image">
          <img src={missoinValue2[0].links.mission_patch} alt=''/>
          </div>
          <p>{missoinValue2[0].details}</p>
          <Link href={missoinValue2[0].links.wikipedia} target="_blank">Wikipedia</Link>
        </div>
      </div>
  );
};

export default Details;
