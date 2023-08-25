import React, { useState, useEffect } from "react";
import CustomConnectButtom from "../../../../SideBar/CustomConnectButtom";
import style from "./PopUpUser.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { setCurrency } from "../../../../../../redux/reducer";
import { IoChevronDownOutline } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import {
  fetchAllUsers,
  fetchCurrentUser,
} from "../../../../../../redux/features/userSlice";

function PopUpUser({ setActiveMenu }) {
  const screenWidth = window.innerWidth || document.body.clientWidth;
  const { currency, isAdmin } = useSelector((state) => state.reducerCompleto);
  const [active, setActive] = useState("null");
  const dispatch = useDispatch();
  const languages = [
    "English",
    "Español",
    "Français",
    "Português",
    "Русский",
    "日本語",
    "简体中文",
    "繁体中文",
    "한국어",
    "Tiếng Việt",
    "Indonesian",
    "ภาษาไทย",
  ];
  const currencies = [
    "USD - $",
    "CNY - ¥",
    "JPY - ¥",
    "KRW - ₩",
    "EUR - €",
    "GBP - £",
    "HKD - $",
    "IDR - Rp",
    "INR - ₹",
    "RUB - ₽",
  ];

  const { logout, user, isAuthenticated, loginWithRedirect} = useAuth0();
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
    if (isAuthenticated) {      
        dispatch(fetchAllUsers());
        dispatch(
          fetchCurrentUser({
            email: user.email,
            name: user.name,
          })
        );     
    }
  }, [ isAuthenticated]);

  return (
    <div className={style.container} data-menu>
      <div className={style.flexContainer}>
        <div className={style.connect}>
          <CustomConnectButtom />
        </div>
        {screenWidth < 800 ? (
          <div className={style.buttons}>
            <a href="/">Home</a>
            <a href="/about">About us</a>
            {admin ? (
              <Link
                to="./create"
                className={style.formBtn}
                onClick={() => setActiveMenu(false)}
              >
                Post your property
              </Link>
            ) : null}
            <a href="/contact">Contacts</a>

            <a>Notifications</a>
            <a>FAQ</a>
            {isAdmin ? <a href="/admin">Admin menu</a> : null}
            <div
              className={
                active === "language" ? style.dropdownActive : style.dropdown
              }
              onClick={() =>
                setActive(active === "language" ? "null" : "language")
              }
            >
              <a>Language</a>
              <IoChevronDownOutline />
            </div>
            <div
              className={active === "language" ? style.flexList : style.notList}
            >
              {languages.map((p) => (
                <p>{p}</p>
              ))}
            </div>
            <div
              className={
                active === "currency" ? style.dropdownActive : style.dropdown
              }
              onClick={() =>
                setActive(active === "currency" ? "null" : "currency")
              }
            >
              <a>{currency}</a>
              <IoChevronDownOutline />
            </div>
            <div
              className={active === "currency" ? style.flexList : style.notList}
            >
              {currencies.map((p) => (
                <p onClick={() => dispatch(setCurrency(p))}>{p}</p>
              ))}
            </div>
            <Link to="/userdash">
              <p className={style.mydashboard}>My dashboard</p>
            </Link>
            <div className={style.ConnectButtom}>
              <CustomConnectButtom />
            </div>
          </div>
        ) : (
          <div className={style.buttons}>
            {/* <a>Notifications</a>
            <a>FAQ</a> */}
            {isAuthenticated ? (
             <div className={style.buttons}>
            {/* <Link to="/mydashboard" onClick={() => setActiveMenu(false)}> */}
              <a href="/mydashboard">My dashboard</a>
            {/* </Link>             */}
              <a rel="noreferrer" 
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin,
                },
              })
            } >LogOut</a>
           
            </div>
            ):(
              <button rel="noreferrer" 
              className={style.login}
              onClick={handleLogin} >LogIn</button>
            )}

           


            {admin ? (
              <Link
                to="./admindashboard"
                className={style.formBtn}
                onClick={() => setActiveMenu(false)}
              >
                Admin Dashboard
              </Link>
            ) : null}
            {isAdmin ? <a href="/admin">Admin menu</a> : null}
          </div>
        )}
      </div>
    </div>
  );
}

export default PopUpUser;
