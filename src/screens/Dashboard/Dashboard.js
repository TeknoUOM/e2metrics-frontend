import { useAuthContext } from "@asgardeo/auth-react";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const { signOut, getBasicUserInfo, isAuthenticated } = useAuthContext();
  const [user, setUser] = useState({});

  useEffect(() => {
    getBasicUserInfo()
      .then((res) => {
        console.log(res);
        setUser(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [isAuthenticated]);

  return (
    <>
      <h1>Dashboard</h1>
      <p>{toString(user)}</p>
      <button onClick={() => signOut()}>signOut</button>
    </>
  );
};

export default Dashboard;
