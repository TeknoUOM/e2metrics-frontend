import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import Loading from "../../../common/Loading/Loading";

const Notifications = () => {
  const [firstName, setFirstName] = useState("");
  const [isEditable, setIsEditable] = useState(false);
  const [loading, setLoading] = useState(false);
  const [values, setValues] = useState({
    wontFixIssuesRatio: 0,
    weeklyCommitCount: 0,
    meanPullRequestResponseTime: 0,
    meanLeadTimeForPulls: 0,
    responseTimeforIssue: 0,
  });
  const userId = sessionStorage.getItem("userId");

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/getUserAlertLimits?userId=${userId}`
      )
      .then((res) => {
        setValues({
          wontFixIssuesRatio: res.data[0].WontFixIssuesRatio,
          weeklyCommitCount: res.data[0].WeeklyCommitCount,
          meanPullRequestResponseTime: res.data[0].MeanPullRequestResponseTime,
          meanLeadTimeForPulls: res.data[0].MeanLeadTimeForPulls,
          responseTimeforIssue: res.data[0].ResponseTimeforIssue,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const handleChange = (e) => {
    e.persist();
    if (e.target.value >= 0) {
      setValues((values) => ({ ...values, [e.target.name]: [e.target.value] }));
    } else {
      setValues((values) => ({ ...values, [e.target.name]: 0 }));
    }
  };
  const handleEdit = () => {
    setIsEditable(true); // Set isEditable to true when edit button is clicked
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_CHOREO_URL}/user/setUserAlertLimits`,
        {
          wontFixIssuesRatio: values.wontFixIssuesRatio.toString(),
          weeklyCommitCount: values.weeklyCommitCount.toString(),
          meanPullRequestResponseTime:
            values.meanPullRequestResponseTime.toString(),
          meanLeadTimeForPulls: values.meanLeadTimeForPulls.toString(),
          responseTimeforIssue: values.responseTimeforIssue.toString(),
          userId: userId,
        }
      )
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
    setIsEditable(false);
  };
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <p className="is-size-2">Notifications</p>
          <form
            className="mydetails-container"
            onSubmit={isEditable ? handleSubmit : undefined}
          >
            <p className="is-size-5	">Alert occur Limits</p>
            <div class="">
              <div className="row column-justify">
                <div class="column is-half is-grouped ">
                  <label>Wont FixIssues Ratio Limit</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-primary"
                      type="number"
                      name="wontFixIssuesRatio"
                      placeholder="Wont FixIssues Ratio"
                      value={values.wontFixIssuesRatio | 0}
                      onChange={handleChange}
                      readOnly={!isEditable}
                    />
                  </div>

                  <label>Weekly Commit Count Limit</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-primary"
                      type="number"
                      name="weeklyCommitCount"
                      placeholder="Weekly Commit Count"
                      value={values.weeklyCommitCount | 0}
                      onChange={handleChange}
                      readOnly={!isEditable}
                    />
                  </div>
                  <label>Mean Pulls Response Time Limit</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-primary"
                      type="number"
                      name="meanPullRequestResponseTime"
                      placeholder="Mean PullRequest Response Time"
                      value={values.meanPullRequestResponseTime | 0}
                      onChange={handleChange}
                      readOnly={!isEditable}
                    />
                  </div>
                  <label>Mean Lead Time For Pulls Limit</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-primary"
                      type="number"
                      name="meanLeadTimeForPulls"
                      placeholder="Mean Lead Time For Pulls"
                      value={values.meanLeadTimeForPulls | 0}
                      onChange={handleChange}
                      readOnly={!isEditable}
                    />
                  </div>
                  <label>Response Time for Issue Limit</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input is-primary"
                      type="number"
                      name="responseTimeforIssue"
                      placeholder="Response Time for Issue"
                      value={values.responseTimeforIssue | 0}
                      onChange={handleChange}
                      readOnly={!isEditable}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="is-grouped">
              <p className="control">
                {!isEditable && (
                  <button
                    type="button"
                    class="button is-primary is-outlined"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                )}
                {!isEditable ? (
                  <button type="button" onClick={handleEdit}></button>
                ) : (
                  <>
                    <button
                      type="submit"
                      class="button is-primary is-outlined"
                      style={{ marginRight: "5px" }}
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      class="button is-link is-outlined"
                      onClick={() => setIsEditable(false)}
                    >
                      Cancel
                    </button>
                  </>
                )}
              </p>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Notifications;
