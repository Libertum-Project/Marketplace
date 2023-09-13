import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllProperties,
  setPropertyStatus,
} from "../../../redux/features/propertySlice";
import Frame1 from "./Frame1/Frame1";
import Frame2 from "./Frame2/Frame2";
import Frame3 from "./Frame3/Frame3";
import Admins from "./TableAdmins/TableAdmins";
import styles from "./adminDash.module.css";
import Loading from "../Loading/Loading";
import PropertyTable from "./Properties/PropertyTable"; 

const AdminDash = () => {
  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.property.allProperies);

  useEffect(() => {
    dispatch(fetchAllProperties());
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
      {/* {allProperties.length > 0 && (
        <section className={styles.properties_container}>
          {allProperties.map((property) => (
            <div key={property.ID_Property} className={styles.property}>
              <p>Name: {property.Feature.Address}</p>
              <p>
                Investment Type:{" "}
                <span>{property.Financial.Investment_type}</span>
              </p>
              <button
                className={`${property.IsActive ? "" : styles.disable}`}
                onClick={() =>
                  property.IsActive
                    ? handlePause(property.ID_Property, false)
                    : null
                }
              >
                Pause
              </button>
              <button
                className={`${property.IsActive ? styles.disable : ""}`}
                onClick={() =>
                  property.IsActive
                    ? null
                    : handleActive(property.ID_Property, true)
                }
              >
                Activate
              </button>
            </div>
          ))}
        </section>
      )} */}
      {/* <Frame2 /> */}
      {/* <Frame3 /> */}
      <Admins />
      <PropertyTable />
    </div>
  ) : (
    <Loading />
  );
};

export default AdminDash;
