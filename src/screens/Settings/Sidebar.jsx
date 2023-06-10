import {
  FaBell,
  FaFile,
  FaQuestionCircle,
  FaUserAlt,
  FaTasks,
  FaCreditCard,
  FaArrowLeft,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "./../../images/logo.png";
import "./settings.css";

const Sidebar = ({ children }) => {
  const menuItem = [
    {
      path: "/settings/mydetails",
      name: "My Details",
      icon: <FaUserAlt />,
    },
    {
      path: "/settings/notifications",
      name: "Notifications",
      icon: <FaBell />,
    },
    {
      path: "/settings/reports",
      name: "Reports",
      icon: <FaFile />,
    },
    {
      path: "/settings/plan",
      name: "Plan",
      icon: <FaTasks />,
    },
    {
      path: "/settings/billing",
      name: "Billing",
      icon: <FaCreditCard />,
    },
    {
      path: "/dashboard/overview",
      name: "Back",
      icon: <FaArrowLeft />,
    },
  ];
  return (
    <div className="sidebar-container">
      <div style={{ width: "200px" }} className="sidebar">
        <div className="image">
          <img className="logo-e2metrics" src={logo} alt="logo" />
        </div>
        <div className="top_section">
          <h1 style={{ display: "block" }} className="settings-title">
            Settings
          </h1>
          <div style={{ marginLeft: "50px" }} className="bars"></div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div style={{ display: "block" }} className="link_text">
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
