import moment from "moment/moment";
import React from "react";
import styles from "./Layout.module.css";
import { BiSearch } from "react-icons/bi";
// import Sidebar from '../Sidebar/Sidebar';
import { Outlet, useLocation, Navigate } from "react-router-dom";
const Layout = () => {
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      {/* <Sidebar /> */}
      {pathname === "/" && <Navigate to="/board" />}
      <div className={styles.dashboard}>
        <div className={styles.topBaseGradients}>
          <div className="gradient-red"></div>
          <div className="gradient-orange"></div>
          <div className="gradient-blue"></div>
        </div>

        <div className={styles.header}>
          <span>{moment().format("dddd, Do MMM YYYY")}</span>

        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
