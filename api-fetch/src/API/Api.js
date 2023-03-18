import * as React from "react";
import { useState } from "react";
import "../index.scss";
import { Button } from "@mui/material";
import Link from "@mui/material/Link";
import Pagination from "@mui/material/Pagination";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import "../index.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addMissions } from "../Store/splice";

export const Api = () => {
  const missionValue = useSelector(({ missiondatas }) => missiondatas);
  console.log(missionValue);
  const dispatch = useDispatch();
  const [Missons, setMission] = useState([]);
  const [pageNation, setpageNation] = useState(10);
  const [offSet, setOffset] = useState(1);
  const [filter, setFilter] = useState("all");
  const [sort, setSort] = useState("flight_number");
  const [order,setOrder]=useState("asc")
  const navigate = useNavigate();
  const handleChange = (event) => {
    setpageNation(event.target.value);
  };
  const handleChange1 = (event) => {
    setFilter(event.target.value);
  };
  const handleSort = (event) => {
    setSort(event.target.value);
  };
  const handleOrder=(event)=>{
    setOrder(event.target.value)
  }
  const handlingPagination = (e) => {
    let off = JSON.parse(e.target.innerText);
    setOffset(off);
  };
  var handlingDetails = (index) => {
    navigate("../Details");
    let missions1 = [Missons[index]];
    dispatch(addMissions(missions1));
  };
  var len = 111;
  React.useEffect(() => {
    fetch(
      `https://api.spacexdata.com/v3/launches${
        filter !== "all" ? `/${filter}` : ""
      }?limit=${pageNation}&offset=${(offSet - 1) * pageNation}&sort=${sort}&order=${order}`
    )
      .then((response) => response.json())
      .then((res) => setMission(res));
  }, [offSet, filter, pageNation, sort,order]);
  return (
    <>
      <section className="section">
        <div className="container">
          <div className="title">
            <FormControl>
              <InputLabel id="demo-simple-select-label">Pagination</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pageNation}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={25}>Twenty Five</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label1">Filter</InputLabel>
              <Select
                labelId="demo-simple-select-label1"
                id="demo-simple-select"
                value={filter}
                label="Age"
                onChange={handleChange1}
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"past"}>Past</MenuItem>
                <MenuItem value={"upcoming"}>UpComing</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label2">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label2"
                id="demo-simple-select"
                value={sort}
                label="Age"
                onChange={handleSort}
              >
                <MenuItem value={"flight_number"}>Flight Number</MenuItem>
                <MenuItem value={"mission_name"}>Mission Name</MenuItem>
                <MenuItem value={"launch_year"}>Launch Year</MenuItem>
              </Select>
            </FormControl>
            <FormControl>
              <InputLabel id="demo-simple-select-label3">Sort</InputLabel>
              <Select
                labelId="demo-simple-select-label3"
                id="demo-simple-select"
                value={order}
                label="Age"
                onChange={handleOrder}
              >
                <MenuItem value={"asc"}>Assending</MenuItem>
                <MenuItem value={"desc"}>Desending</MenuItem>
              </Select>
            </FormControl>
          </div>
          <div className="row">
            {Missons.map((value, index) => {
              return (
                <div className="col" key={index}>
                  <div className="content">
                    <h4> {value.mission_name}</h4>
                    <div className="image">
                      <img src={value.links.mission_patch} alt="kkshgk"></img>
                    </div>
                    <p>{value.details}</p>
                    <Link href={value.links.wikipedia} target="_blank">
                      Wikipedia
                    </Link>
                    <Button onClick={() => handlingDetails(index)}>
                      View Details
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
          <div className='pagination'>
            <Pagination
              count={Math.ceil(len / pageNation)}
              onChange={(e) => handlingPagination(e)}
            />
          </div>
        </div>
      </section>
    </>
  );
};
