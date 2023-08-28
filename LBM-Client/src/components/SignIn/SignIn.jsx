import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllUsers,
  fetchCurrentUser,
} from "../../../redux/features/userSlice";
import Loading from "../Loading/Loading";



 const SignIn = () => {


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

      }
    }
  }, [isAuthenticated, isLoading]);

  return !isLoading && isAuthenticated ? (
    <div>

    </div>
  ) : (
    <Loading />
  );
  
};

export default SignIn;