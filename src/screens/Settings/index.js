import { Button } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import Sidebar from "./Sidebar";
import MyDetails from "./Pages/MyDetails/MyDetails";
import Notifications from "./Pages/Notifications";
import Reports from "./Pages/Reports";
import Plan from "./Pages/Plan";
import Billing from "./Pages/Billing";
import Help from "./Pages/Help";
import { Switch, Route } from "react-router-dom";

function Settings() {
  return (
    <>
      <Sidebar>
        <Switch>
          <Route path="/settings/notifications" component={Notifications} />
          <Route path="/settings/reports" component={Reports} />
          <Route path="/settings/plan" component={Plan} />
          <Route path="/settings/billing" component={Billing} />
          <Route path="/settings/help" component={Help} />
          <Route path="/settings/mydetails" component={MyDetails} />
        </Switch>
      </Sidebar>
    </>
  );
}

export default Settings;
