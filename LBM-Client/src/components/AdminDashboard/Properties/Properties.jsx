import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropertyTable from "./PropertyTable";
import Frame1 from "../Frame1/Frame1";
import Frame2 from "../Frame2/Frame2";
import {
    fetchAllProperties,
    setPropertyStatus,
} from "../../../../redux/features/propertySlice"

const Properties = () => {

  const dispatch = useDispatch();
  const allProperties = useSelector((state) => state.property.allProperies);

  useEffect(() => {
    dispatch(fetchAllProperties());
  }, [dispatch]);

//   const handleActive = async (propertyId, isActive) => {
//     await dispatch(setPropertyStatus({ propertyId, isActive }));
//     dispatch(fetchAllProperties());
//   };

//   const handlePause = async (propertyId, isActive) => {
//     await dispatch(setPropertyStatus({ propertyId, isActive }));
//     dispatch(fetchAllProperties());
//   };
  console.log("HOLA")
  console.log(allProperties.length > 0)
  console.log ("all properties " + allProperties)

    return(
        <div>
            <Frame1 />
            <Frame2 />
            <PropertyTable
                //   allProperties = { allProperties }
                //   handleActive = { handleActive }
                //   handlePause = { handlePause }
            />
        </div>
    )
}; 

export default Properties; 