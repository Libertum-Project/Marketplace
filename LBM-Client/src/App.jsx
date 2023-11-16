import { ClickToComponent } from 'click-to-react-component';
import NotFound from './components/NotFound/NotFound';
import './App.css';
import { Route, Routes, Outlet } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Dash from './components/Dashboards/Dash/Dash';
import RealEstates from './components/RealEstates';
import React, { useEffect, useState } from 'react';
import Modals from './components/Dashboards/Modals/Modals';
import Governance from './components/Governance/Governance';
import Vaults from './components/Vaults/Vaults';
import RealEstateDetail from './components/RealEstateDetail/index';
import CoomingSoon from './components/ComingSoon/ComingSoon';
import GovernanceDetails from './components/Governance/GovernanceDetails/GovernanceDetails';
import Marketplace from './components/MarketPlace/Marketplace';
import NavbarMarket from './components/Landing/NavBar/NavbarMarket/NavbarMarket';
import { useModal } from './helpers/useModal/useModal';
import AdminMenu from './components/Admin/AdminMenu/AdminMenu';
import { useAccount } from 'wagmi';
import { getAdminByWallet, getUnapprovedProjects } from '../redux/actions';
import { setIsAdmin } from '../redux/reducer';
import ChatBot from './components/ChatBot/ChatBot';
import { useMediaQuery } from 'react-responsive';
import SupportCenter from './components/SupportCenter/SupportCenter';
import BuyProperty from './components/RealEstateDetail/Buying/BuyProperty';
import Footer from './components/RealEstates/Footer/Footer.jsx';
import CreateProperty from './components/CreateProperty/CreateProperty';
import AdminDash from './components/AdminDashboard/AdminDash';
import UsersTable from './components/AdminDashboard/UsersTable/UsersTable';
import Transactions from './components/AdminDashboard/Transactions/Trasactions';
import Properties from './components/AdminDashboard/Properties/Properties';
import DashboardUser from './components/DashboardUser/DashboardUser';
import CoinPage from './components/Coin/Coin';
import SubscribePage from './components/Contact/SubscribePage';
import ContactPage from './components/Contact/ContactPage';
import AboutPage from './components/AboutUs/About';
import PreviewProperty from './components/PreviewProperties/Preview';
import Ico from './components/Ico/Ico';

function App() {
  const dispatch = useDispatch();
  const [stateModal, setStateModal] = useState(false);
  const [isOpenModal, openModal, closeModal] = useModal();
  const { address } = useAccount();
  const { selectedIcon, walletPopUp, adminWallet, isAdmin } = useSelector(
    (state) => state.reducerCompleto,
  );
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const AppLayout = () => (
    <>
      <Modals state={stateModal} setStateModal={setStateModal} />

      <div className="SideBar">
        <NavbarMarket />
      </div>
      <Outlet />
    </>
  );

  useEffect(() => {
    openModal();
    dispatch(getAdminByWallet(address));
    dispatch(setIsAdmin(adminWallet.length ? true : false));
    isAdmin ? dispatch(getUnapprovedProjects()) : null;
  }, [dispatch]);

  return (
    <div className="App">
      <ClickToComponent />
      <Routes>
        {/* <Route path="/" element={<Landing />} /> */}
        <Route element={<AppLayout />}>
          <Route
            path="/dashboard"
            element={
              <div className="Page">
                <Dash setStateModal={setStateModal} />
              </div>
            }
          />
          <Route
            path="/vaults"
            element={
              <div className="Page">
                <Vaults />
              </div>
            }
          />

          <Route
            path="/ico"
            element={
              <div className="">
                <Ico />

                {/* <ICO /> */}

                {/* <CoomingSoon /> */}
              </div>
            }
          />
          <Route
            path={'/'}
            element={
              <div className="Page">
                <RealEstates />
              </div>
            }
          />
          <Route
            path={'/marketplace/:id'}
            element={
              <div className="Page">
                <RealEstateDetail />
              </div>
            }
          />
          <Route path="/marketplace/buy/:id" element={<BuyProperty />} />

          <Route
            path="/peertopeer"
            element={
              <div className="Page">
                <Marketplace />
              </div>
            }
          />

          <Route path={'/chatbot'} element={<ChatBot />} />
          <Route />

          <Route
            path="/governance"
            element={
              <div className="Page">
                <Governance />
              </div>
            }
          />
          <Route
            path="/governance/id"
            element={
              <div className="Page">
                <GovernanceDetails />
              </div>
            }
          />

          <Route
            path={'/userdash/myproperties/:id'}
            element={
              <div className="Page">
                <RealEstateDetail />
              </div>
            }
          />

          <Route
            path="/admindashboard"
            element={
              <div className="Page">
                <AdminDash />
              </div>
            }
          />

          <Route
            path="/admin-allusers"
            element={
              <div className="Page">
                <UsersTable />
              </div>
            }
          />

          <Route
            path="/admin-properties"
            element={
              <div className="Page">
                <Properties />
              </div>
            }
          />

          <Route
            path="/admin-transactions"
            element={
              <div className="Page">
                <Transactions />
              </div>
            }
          />

          <Route
            path={'/admin'}
            element={
              <div className="Page">
                <AdminMenu />
              </div>
            }
          />

          <Route path={'/create'} element={<CreateProperty />} />

          <Route path={'/create/:id'} element={<CreateProperty />} />

          <Route path="/support" element={<SupportCenter />} />

          <Route
            path={'/draft/preview/:id'}
            element={
              <div className="Page">
                <PreviewProperty />
              </div>
            }
          />

          <Route path={'/mydashboard/*'} element={<DashboardUser />} />

          <Route path="/subscribe" element={<SubscribePage />} />

          <Route path="/contact" element={<ContactPage />} />

          <Route path="/about" element={<AboutPage />} />

          <Route
            path={'/coinrelease'}
            element={
              <div className="Page">
                <CoinPage />
              </div>
            }
          />
        </Route>
        <Route path="/swap" element={<CoomingSoon />} />
        <Route path="/comingsoon" element={<CoomingSoon />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ClickToComponent />
    </div>
  );
}

export default App;
