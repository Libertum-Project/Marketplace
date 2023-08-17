import Frame3 from "./Frame3/Frame3";
import Properties from "./UsersTable/Table";

const MyProperties = ({name, id, transactions, saved}) => {
  return(
    <>

      <div>
        <p>Hi, {name}! Here you can see your properties!</p>
      </div>
    
      <div>
        <Frame3 />
      </div>

      <div>
        <Properties />
      </div>
      <p>{transactions}</p>
    
    </>
)
};

export default MyProperties;