import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllUsers, fetchCurrentUser } from "../../../redux/features/userSlice";
import Frame1 from "./Frame1/Frame1";
import Frame2 from "./Frame2/Frame2";
import ReportofProperties from "./Reportofproperties";
import Modal from "./Modal";

const UserDashboard = () => {
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


  const [showModal, setShowModal] = useState(true); // Inicialmente mostrar el modal

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <Modal onClose={handleCloseModal} />}

      <Frame1 
      // user ={currentUser.ID_user}
      // email={currentUser.email}
      // name ={currentUser.name}
      // investedProperties = {currentUser.investedProperties}
      // publishedProperties = {currentUser.publishedProperties}
      // savedProperties = {currentUser.savedProperties}
      // transactions ={currentUser.transactions}
      />
      <Frame2 />
      <ReportofProperties />
    </div>
  );
};

export default UserDashboard;
