import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  fetchCurrentUser,
} from "../../../redux/features/userSlice";
import {
  claimMonthlyPayment,
  withdrawFunds,
} from "../../../redux/features/propertySlice";
import { NavLink, Route, Routes, Outlet } from "react-router-dom";
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

import styles from "./DashboardUser.module.scss";
import { current } from "@reduxjs/toolkit";
import Loading from "../Loading/Loading";

function DashboardUser() {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const currentUser = useSelector((state) => state.user.currentUser);

  console.log(currentUser);
  console.log(allUsers);

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
        /*
        const propertyAddress = "0xB7A5bd0345EF1Cc5E66bf61BdeC17D2461fBd968";
        const userAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
        const quantity = 10;
        const propertyType = "capitalRepayment";
        dispatch(
          claimMonthlyPayment({ propertyAddress, quantity, propertyType })
        );
        dispatch(withdrawFunds({ propertyAddress, userAddress, propertyType }));
        */
      }
    }
  }, [isAuthenticated, isLoading]);

  const handleClickProperties = () =>{
    setActiveTab(3);
  };

  const handleClickInvestments = () => {
    setActiveTab(4);
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
                <p>My Properties</p>
              </>
            ) : (
              <>
                <img src={propertiesimage} alt="" className={styles.image} />
                <p>My Properties</p>
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
                <p>my Investments</p>
              </>
            ) : (
              <>
                <img src={investmentsimage} alt="" className={styles.image} />
                <p>my Investments</p>
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
                <p>Saved properties</p>
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
                <p>my Profile</p>
              </>
            ) : (
              <>
                <img src={profileimage} alt="" className={styles.image} />
                <p>my Profile</p>
              </>
            )}
          </div>
        </button>

        <div className={styles.helpbox}>
          <h3>Need help?</h3>
          <p>Please check out our docs</p>
          <button>WHITEPAPER</button>
        </div>
      </div>

      {activeTab === 1 && (
        <div>
          <DashboardContent 
          name={currentUser.name} 
          id={currentUser.ID_user} 
          handleClickInvestments = {handleClickInvestments}
          handleClickProperties = {handleClickProperties}
          />
        </div>
      )}

      {activeTab === 2 && (
        <div>
          <Finances />
        </div>
      )}

      {activeTab === 3 && (
        <div>
          <MyProperties
            name={currentUser.name}
            id={currentUser.ID_user}
            email={currentUser.email}
            transactions={currentUser.transactions}
            publishedProperties={currentUser.publishedProperties}
            investments={currentUser.investedProperties}
            
          />
        </div>
      )}

      {activeTab === 4 && (
        <div>
          <MyInvestments
            name={currentUser.name}
            id={currentUser.ID_user}
            transactions={currentUser.transactions}
            investments={currentUser.investedProperties}
          />
        </div>
      )}

      {activeTab === 5 && (
        <div>
          <SavedProperties saved={currentUser.savedProperties} />
        </div>
      )}

      {activeTab === 6 && (
        <div>
          <MyProfile
            name={currentUser.name}
            id={currentUser.key}
            email={currentUser.email}
          />
        </div>
      )}
    </div>
  ) : (
    <Loading />
  );
}

export default DashboardUser;
