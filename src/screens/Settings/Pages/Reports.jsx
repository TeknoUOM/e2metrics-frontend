import React from "react";
import Sidebar from "../Sidebar";
import "./Reports.css";

const Reports = () => {
  return (
    <Sidebar>
      <div>
        <div className="field">
          <input
            id="switchRoundedOutlinedDefault"
            type="checkbox"
            name="switchRoundedOutlinedDefault"
            class="switch is-rtl is-rounded is-outlined"
          />
          <label class="toggleLable " for="switchRoundedOutlinedDefault">
            Send monthly reports
          </label>

            <div className="buttons">
              <button class="button ">Cancel</button>
              <button class="button is-success">Save</button>
            </div>
          
        </div>
      </div>
    </Sidebar>
  );
};

export default Reports;
