import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, fetchCurrentUser } from "../../../redux/features/userSlice";
import { NavLink, Route, Routes, Outlet } from 'react-router-dom';
import DashboardContent from './Dashboard/Dashboard';
import Finances from "./Finances/Finances";
import MyProperties from "./MyProperties/MyProperties";
import MyProfile from "./Profile/MyProfile";
import SavedProperties from "./SavedProperties/SavedProperties";
import MyInvestments from "./MyInvestments/MyInvestments";

import styles from './DashboardUser.module.scss';
import { current } from "@reduxjs/toolkit";


function DashboardUser() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };

    const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  const dispatch = useDispatch();
  const allUsers = useSelector((state) => state.user.allUsers);
  const currentUser = useSelector((state) => state.user.currentUser);

  console.log(currentUser)
  console.log(allUsers)

  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/userdash/`;
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
        dispatch(fetchCurrentUser({
          email: user.email,
          name: user.name
        }))
      }
    }
  }, [isAuthenticated, isLoading]);




  return (
    <div className={styles['dashboard-user']}>
      

      <div className={styles.sidebar}>
              <button
                className={`${styles.tab} ${activeTab === 1 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Dashboard
              </button>
              {/* <button
                className={`${styles.tab} ${activeTab === 2 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Financials
              </button> */}
              <button
                className={`${styles.tab} ${activeTab === 3 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(3)}
              >
                My Properties
              </button>

              <button
                className={`${styles.tab} ${activeTab === 4 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(4)}
              >
                My Investments
              </button>

              <button
                className={`${styles.tab} ${activeTab === 5 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(5)}
              >
                Saved Properties
              </button>

              <button
                className={`${styles.tab} ${activeTab === 6 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(6)}
              >
                Profile
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
                name = {currentUser.name}
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
                    name = {currentUser.name}
                    id = {currentUser.ID_user}
                    transactions = {currentUser.transactions}                   
                    properties = {currentUser.publishedProperties}
                    />
                </div>
                )}

        {activeTab === 4 && (
                <div>
                    <MyInvestments 
                    name = {currentUser.name}
                    id = {currentUser.ID_user}
                    transactions = {currentUser.transactions}
                    investemnts = {currentUser.investedProperties}
                    />
                </div>
                )}

        {activeTab === 5 && (
                <div>
                    <SavedProperties 
                     saved = {currentUser.savedProperties}
                    />
                </div>
                )}

        {activeTab === 6 && (
                <div>
                    <MyProfile 
                     name = {currentUserInfo.name}
                     id = {currentUserInfo.key}
                     email={currentUserInfo.email}
                    />
                </div>
                )}


    </div>
  );
}





export default DashboardUser;
