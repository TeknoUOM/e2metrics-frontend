import React, { useEffect, useState } from "react";
import "./Reports.css";
import axios from "axios";
import Loading from "../../../common/Loading/Loading";
import Swal from "sweetalert2";

const Reports = () => {
  const userId = sessionStorage.getItem("userId");
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(false);
  const [changed, setChanged] = useState(false);

  const changeReport = () => {
    setChecked(!checked);
    setChanged(true);
  };

  const handleSave = () => {
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/setUserReportStatus`,
        {
          userId: userId,
          isReportsEnable: checked,
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
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUsersRepotsStatus?userId=${userId}`
      )
      .then((res) => {
        console.log();
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
          {changed ? (
            <div className="buttons">
              <button class="button is-success" onClick={handleSave}>
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
