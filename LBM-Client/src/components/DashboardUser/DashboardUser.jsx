import React from 'react';
import { useState } from 'react';
import { NavLink, Route, Routes, Outlet } from 'react-router-dom';
import DashboardContent from './Dashboard/Dashboard';
import styles from './DashboardUser.module.scss';

function DashboardUser() {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabIndex) => {
      setActiveTab(tabIndex);
    };


  return (
    <div className={styles['dashboard-user']}>
      

      <div className={styles.sidebar}>
              <button
                className={`${styles.tab} ${activeTab === 1 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(1)}
              >
                Dashboard
              </button>
              <button
                className={`${styles.tab} ${activeTab === 2 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(2)}
              >
                Financials
              </button>
              <button
                className={`${styles.tab} ${activeTab === 3 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(3)}
              >
                My Properties
              </button>

              <button
                className={`${styles.tab} ${activeTab === 4 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(3)}
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
                className={`${styles.tab} ${activeTab === 5 ? styles.tabActive : ''}`}
                onClick={() => handleTabClick(5)}
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
            <DashboardContent />
          </div>
        )}


        {/* <NavLink to="/mydashboard/dashboard" activeClassName="active">Dashboard</NavLink>
        <NavLink to="/mydashboard/finances" activeClassName="active">Finances</NavLink>
        <NavLink to="/mydashboard/properties" activeClassName="active">My Properties</NavLink>
        <NavLink to="/mydashboard/investments" activeClassName="active">My Investments</NavLink>
        <NavLink to="/mydashboard/saved" activeClassName="active">Saved Properties</NavLink>
        <NavLink to="/mydashboard/profile" activeClassName="active">Profile</NavLink> */}




      
      <div className="content">
        <Routes>
          <Route path="/mydashboard/dashboard" element={<DashboardContent />} />
          <Route path="/mydashboard/finances" element={<UserProfile />} />
          {/* ...otros contenidos */}
        </Routes>
      </div>
    </div>
  );
}



function UserProfile() {
  return (
    <div>
      {/* Contenido del perfil del usuario */}
    </div>
  );
}

export default DashboardUser;
