import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  fetchCurrentUser,
} from "../../../redux/features/userSlice";
import { Link } from "react-router-dom";
import DashboardContent from "./Dashboard/Dashboard";
import Finances from "./Finances/Finances";
import MyProperties from "./MyProperties/MyProperties";
import MyProfile from "./Profile/MyProfile";
import SavedProperties from "./SavedProperties/SavedProperties";
import MyInvestments from "./MyInvestments/MyInvestments";

import dashboardimage from "./assets/dashboardInactive.svg";
import dashboardimageActive from "./assets/dashboardActive.svg";
import investmentsimage from "./assets/investmentsInactive.svg";
import investmentsimageActive from "./assets/investmentsActive.svg";
import propertiesimage from "./assets/propertiesInactive.svg";
import propertiesimageActive from "./assets/propertiesActive.svg";
import savedimage from "./assets/savedInactive.svg";
import savedimageActive from "./assets/savedActive.svg";
import profileimage from "./assets/profileInactive.svg";
import profileimageActive from "./assets/profileActive.svg";
import whitepaperPDF from "../../assets/whitepaperLibertum.pdf"

import styles from "./DashboardUser.module.scss";
import { current } from "@reduxjs/toolkit";
import Loading from "../Loading/Loading";
import { cssObjectFromTheme } from "@rainbow-me/rainbowkit";

function DashboardUser() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const { isAuthenticated, isLoading, loginWithRedirect, user, logout } =
    useAuth0();

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const currentUser = useSelector((state) => state.user.currentUser);

  // console.log(currentUser);
  // console.log(allUsers);

  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/mydashboard/`;
    loginWithRedirect({
      redirectUri: redirectUri,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        handleLogin();
      }
      if (user?.name && user?.email) {
        dispatch(fetchAllUsers());
        dispatch(
          fetchCurrentUser({
            email: user.email,
            name: user.name,
          })
        );
      }
    }
  }, [isAuthenticated, isLoading, DashboardUser]);

  const handleClickProperties = () => {
    console.log("handleClickProperties");

    setActiveTab(3);
  };

  const handleClickInvestments = () => {
    setActiveTab(4);
  };


  const handleDownloadWhitepaper = () => {
    const link = document.createElement("a");
    link.href = whitepaperPDF;
    link.download = "whitepaperLibertum.pdf";
    link.click();
  };



  return !isLoading && isAuthenticated ? (

    <div className={styles["dashboard-user"]}>
      <div className={styles.sidebar}>
        <button
          className={`${styles.tab} ${activeTab === 1 ? styles.tabActive : ""}`}
          onClick={() => handleTabClick(1)}
        >
          <div className={styles.tabContent}>
            {activeTab === 1 ? (
              <>
                <img
                  src={dashboardimageActive}
                  alt=""
                  className={styles.imageActive}
                />
                <p>Dashboard</p>
              </>
            ) : (
              <>
                {/* SVG 1 (Imagen normal) */}
                <img src={dashboardimage} alt="" className={styles.image} />
                <p>Dashboard</p>
              </>
            )}
          </div>
        </button>
        {/* <button
                className={`${styles.tab} ${activeTab === 2 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Financials
              </button> */}
        <button
          className={`${styles.tab} ${activeTab === 3 ? styles.tabActive : ""}`}
          onClick={() => handleTabClick(3)}
        >
          <div className={styles.tabContent}>
            {activeTab === 3 ? (
              <>
                <img
                  src={propertiesimageActive}
                  alt=""
                  className={styles.imageActive}
                />
                <p>Properties</p>
              </>
            ) : (
              <>
                <img src={propertiesimage} alt="" className={styles.image} />
                <p>Properties</p>
              </>
            )}
          </div>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 4 ? styles.tabActive : ""}`}
          onClick={() => handleTabClick(4)}
        >
          <div className={styles.tabContent}>
            {activeTab === 4 ? (
              <>
                <img
                  src={investmentsimageActive}
                  alt=""
                  className={styles.imageActive}
                />
                <p>Investments</p>
              </>
            ) : (
              <>
                <img src={investmentsimage} alt="" className={styles.image} />
                <p>Investments</p>
              </>
            )}
          </div>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 5 ? styles.tabActive : ""}`}
          onClick={() => handleTabClick(5)}
        >
          <div className={styles.tabContent}>
            {activeTab === 5 ? (
              <>
                <img
                  src={savedimageActive}
                  alt=""
                  className={styles.imageActive}
                />
                <p>Saved</p>
              </>
            ) : (
              <>
                <img src={savedimage} alt="" className={styles.image} />
                <p>Saved</p>
              </>
            )}
          </div>
        </button>

        <button
          className={`${styles.tab} ${activeTab === 6 ? styles.tabActive : ""}`}
          onClick={() => handleTabClick(6)}
        >
          <div className={styles.tabContent}>
            {activeTab === 6 ? (
              <>
                <img
                  src={profileimageActive}
                  alt=""
                  className={styles.imageActive}
                />
                <p>Profile</p>
              </>
            ) : (
              <>
                <img src={profileimage} alt="" className={styles.image} />
                <p>Profile</p>
              </>
            )}
          </div>
        </button>

        <div className={styles.helpbox}>
          <h3>Need help?</h3>
          <p>Please check out our docs</p>
          {/* <Link
            to={whitepaperPDF}
            target="_blank"
            rel="noopener noreferrer"
            download="LBM-whitepaper.pdf"
          >
            WHITEPAPER
          </Link> */}
        <button onClick={handleDownloadWhitepaper}>WHITEPAPER</button>
        </div>
      </div>

      {activeTab === 1 && (
        <div>
          <DashboardContent
            name={currentUser.name}
            id={currentUser.ID_user}
            handleClickInvestments={handleClickInvestments}
            handleClickProperties={handleClickProperties}
          />
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <Finances />
        </div>
      )}

      {activeTab === 3 && (
        <div className={styles.content}>
          <MyProperties
            name={currentUser.name}
            id={currentUser.ID_user}
            email={currentUser.email}
            transactions={currentUser.transactions}
            publishedProperties={currentUser.publishedProperties}
            investments={currentUser.investedProperties}
            draft = {currentUser.draftProperties}
          />
        </div>
      )}

      {activeTab === 4 && (
        <div className={styles.content}>
          <MyInvestments
            name={currentUser.name}
            id={currentUser.ID_user}
            transactions={currentUser.transactions}
            investments={currentUser.investedProperties}
          />
        </div>
      )}

      {activeTab === 5 && (
        <div className={styles.content}>
          <SavedProperties saved={currentUser.savedProperties} />
        </div>
      )}

      {activeTab === 6 && (
        <div className={styles.content}>
          <MyProfile
            name={currentUser.name}
            id={currentUser.key}
            email={currentUser.email}
            user={currentUser}
          />
        </div>
      )}
    </div>

  ) : (
    <Loading />
  );
}

export default DashboardUser;
