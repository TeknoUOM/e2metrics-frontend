import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";
import "./ManageUser.scss";

function Content({}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [roleChanged, setRoleChanged] = useState(true);

  const changeUserGroup = (group, userId) => {
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/changeUserGroup?userId=${userId}&groupName=${group}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setRoleChanged(!roleChanged);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const changeUserToFree = (index) => {
    changeUserGroup("Free", data[index].id);
    setLoading(true);
  };
  const changeUserToBasic = (index) => {
    changeUserGroup("Basic", data[index].id);
    setLoading(true);
  };
  const changeUserToPremium = (index) => {
    changeUserGroup("Premium", data[index].id);
    setLoading(true);
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Username",
      selector: (row) => row.username,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Registered Date",
      selector: (row) => row.registeredDate,
      sortable: true,
    },
    {
      name: "Subscription",
      selector: (row) => row.subscription,
      cell: (row, index) => (
        <>
          <Button
            color={row.subscription == "Free" ? "success" : "info"}
            variant={row.subscription == "Free" ? "contained" : "outlined"}
            onClick={() => changeUserToFree(index)}
          >
            Free
          </Button>
          <Button
            color={row.subscription == "Basic" ? "success" : "info"}
            variant={row.subscription == "Basic" ? "contained" : "outlined"}
            onClick={() => changeUserToBasic(index)}
          >
            Basic
          </Button>
          <Button
            color={row.subscription == "Premium" ? "success" : "info"}
            variant={row.subscription == "Premium" ? "contained" : "outlined"}
            onClick={() => changeUserToPremium(index)}
          >
            Premium
          </Button>
        </>
      ),
      sortable: true,
    },
  ];

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getAllUserDetails`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        let temp = res.data.map((user) => {
          return {
            id: user.id,
            username: user.userName.split("/")[1],
            email: user.emails[0],
            registeredDate: user.meta.created.split("T")[0],
            subscription: user.groups[0].display.split("/")[1],
          };
        });
        let filteredData = temp.filter((user) => user.subscription != "Admin");
        setData(filteredData);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, [roleChanged]);

  return (
    <>
      {loading ? (
        <ClipLoader />
      ) : (
        <>
          <Typography variant="h4" gutterBottom>
            Manage User
          </Typography>
          <DataTable columns={columns} data={data} pagination />
        </>
      )}
    </>
  );
}

export default Content;
