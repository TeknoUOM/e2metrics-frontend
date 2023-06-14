import React, { useEffect, useState } from "react";
import "./Reports.css";
import axios from "axios";
import Loading from "../../../common/Loading/Loading";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";

const Reports = () => {
  const userId = sessionStorage.getItem("userId");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [changed, setChanged] = useState(false);
  const history = useHistory();

  const changeReport = () => {
    setChecked(!checked);
    setChanged(true);
  };

  var now = new Date();
  var prevMonthLastDate = new Date(now.getFullYear(), now.getMonth(), 0);
  var prevMonthFirstDate = new Date(
    now.getFullYear() - (now.getMonth() > 0 ? 0 : 1),
    (now.getMonth() - 1 + 12) % 12,
    1
  );
  const prevMonthLastDateString = `${prevMonthLastDate.getFullYear()}-${
    prevMonthLastDate.getMonth() + 1
  }-${prevMonthLastDate.getDate()}`;
  const prevMonthFirstDateString = `${prevMonthFirstDate.getFullYear()}-${
    prevMonthFirstDate.getMonth() + 1
  }-${prevMonthFirstDate.getDate()}`;

  const handleReport = () => {
    history.push(
      `/report/${userId}/${prevMonthFirstDateString}/${prevMonthLastDateString}`
    );
  };

  const handleSave = () => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/setUserReportStatus`,
        {
          userId: userId,
          isReportsEnable: checked,
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
        setChanged(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
  };

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUsersRepotsStatus?userId=${userId}`,
        {
          headers: {
            "API-Key": process.env.REACT_APP_BACKEND_API_KEY,
            accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data === 0) {
          setChecked(false);
        } else if (res.data === 1) {
          setChecked(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <p className="is-size-2">Report</p>
          <div className="field">
            <input
              id="switchRoundedOutlinedDefault"
              type="checkbox"
              name="switchRoundedOutlinedDefault"
              class="switch is-rtl is-rounded is-outlined"
              checked={checked}
              onChange={changeReport}
            />
            <label for="switchRoundedOutlinedDefault">
              Send monthly reports
            </label>
          </div>
          {checked ? (
            <div className="buttons">
              <button
                class="button is-primary is-outlined"
                onClick={handleReport}
              >
                Open Report
              </button>
            </div>
          ) : null}

          {changed ? (
            <div className="buttons">
              <button
                class="button is-primary is-outlined"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          ) : null}
        </div>
      )}
    </>
  );
};

export default Reports;
