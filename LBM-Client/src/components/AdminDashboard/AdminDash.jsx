import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProperties,
  setPropertyStatus,
} from "../../../redux/features/propertySlice";
import {
  fetchAllUsers,
  fetchCurrentUser,
} from "../../../redux/features/userSlice";
import Frame1 from "./Frame1/Frame1";
import Frame2 from "./Frame2/Frame2";
import Frame3 from "./Frame3/Frame3";
import Admins from "./TableAdmins/TableAdmins";
import styles from "./adminDash.module.css";
import Loading from "../Loading/Loading";
import PropertyTable from "./Properties/PropertyTable"; 
import Tokens from "./Tokens/Tokens";
import css from "./adminDash.module.css"
import UsersTable from "./UsersTable/UsersTable";

const AdminDash = () => {
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.property.allProperies);
  const allUsers = useSelector((state) => state.user.allUsers);


  useEffect(() => {
    dispatch(fetchAllProperties());
    dispatch(fetchAllUsers());
  }, [dispatch]);

  const handleActive = async (propertyId, isActive) => {
    await dispatch(setPropertyStatus({ propertyId, isActive }));
    dispatch(fetchAllProperties());
  };

  const handlePause = async (propertyId, isActive) => {
    await dispatch(setPropertyStatus({ propertyId, isActive }));
    dispatch(fetchAllProperties());
  };

  const navigate = useNavigate();
  const { isAuthenticated, isLoading, loginWithRedirect, user } = useAuth0();

  let admin = null;

  if (user?.sub === import.meta.env.VITE_ADMIN_DEV1)
    admin = import.meta.env.VITE_ADMIN_DEV1;
  if (user?.sub === import.meta.env.VITE_ADMIN_DEV2)
    admin = import.meta.env.VITE_ADMIN_DEV2;
  if (user?.sub === import.meta.env.VITE_ADMIN_ALAN)
    admin = import.meta.env.VITE_ADMIN_ALAN;
  if (user?.sub === import.meta.env.VITE_ADMIN_GABRIEL)
    admin = import.meta.env.VITE_ADMIN_GABRIEL;
  if (user?.sub === import.meta.env.VITE_ADMIN_JAVVAD)
    admin = import.meta.env.VITE_ADMIN_JAVVAD;

  const handleLogin = () => {
    const redirectUri = `${window.location.origin}/marketplace/`;
    loginWithRedirect({
      redirectUri: redirectUri,
    });
  };

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated || !admin) {
        handleLogin();
      }
    }
  }, [navigate, isAuthenticated, isLoading, admin]);

  return !isLoading && isAuthenticated && admin ? (
    <div>
      <Frame1 />

      <h2 className={css.subtitle}>Other admins</h2>
      <Admins />

      <h2 className={css.subtitle}>Properties' monthly payment</h2>
      <PropertyTable />

      <h2 className={css.subtitle}>Tokens PRE-SALE</h2>
      <Tokens />

      {/* <h2 className={css.subtitle}>Users</h2>
      <UsersTable /> */}


    </div>
  ) : (
    <Loading />
  );
};

export default AdminDash;
