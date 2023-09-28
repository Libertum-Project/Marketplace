import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector, useDispatch } from "react-redux";
import {
  saveProperty,
  unsaveProperty,
  fetchCurrentUser,
} from "../../../redux/features/userSlice";
import style from "./SaveProperty.module.css";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

const SaveProperty = ({ propertyId }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);
  const { user } = useAuth0();
  const savedPropertiesArray = currentUser.savedProperties?.map(
    (property) => property.ID_Property
  );

  let isCurrentPropertySaved = false;

  savedPropertiesArray?.forEach((property) => {
    if (property === propertyId) isCurrentPropertySaved = true;
  });

  const [showSaved, setShowSaved] = useState(isCurrentPropertySaved);

    useEffect(() => {
    if (user) {
      dispatch(
        fetchCurrentUser({
          email: user.email,
          name: user.name,
        })
      );
    }
  }, [showSaved, dispatch, user]);

  const handleSaveProperty = () => {
    setShowSaved(true);
    dispatch(saveProperty(propertyId));
    if (user) {
      dispatch(
        fetchCurrentUser({
          email: user.email,
          name: user.name,
        })
      );
    }
  };

  const handleUnsaveProperty = () => {
    setShowSaved(false);
    dispatch(unsaveProperty(propertyId));
    if (user) {
      dispatch(
        fetchCurrentUser({
          email: user.email,
          name: user.name,
        })
      );
    }
  };

  return (
    <>
      {showSaved ? (
        <div className={style.bookmark} onClick={() => handleUnsaveProperty()}>
          <BsBookmarkFill />
        </div>
      ) : (
        <div className={style.bookmark} onClick={() => handleSaveProperty()}>
          <BsBookmark />
        </div>
      )}
    </>
  );
};

export default SaveProperty;
