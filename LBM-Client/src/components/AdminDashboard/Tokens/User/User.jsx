import "./User.scss";
import { useState, useEffect } from 'react';
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "Purchase date",
    selector: (row) => row.datepurchase,
  },
  {
    name: "Tokens purchased",
    selector: (row) => row.tokens,
  },
  {
    name: "Price per token",
    selector: (row) => row.tokenprice,
  },
  {
    name: "Credit",
    selector: (row) => row.credit,
  },

];

const User = ({closeModal}) => {

  useEffect(() => {
    const handleOutsideClick = (e) => {
      const modal = document.querySelector('.user-modal-container');
      if (modal && !modal.contains(e.target)) {
        closeModal(); 
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
   
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [closeModal]);



  const data = [
    {
      datepurchase: "10/10",
      tokens: 5,
      tokenprice: 20,
      credit: "CREDIT"

  },
  {
    datepurchase: "10/10",
    tokens: 5,
    tokenprice: 20,
    credit: "CREDIT"

},
{
  datepurchase: "10/10",
  tokens: 5,
  tokenprice: 20,
  credit: "CREDIT"

},

]
  return(
    <div className="user-modal">
      <div className="user-modal-container">
        <div className="header">
          <div className="user-info">
            <h3>User</h3>
            <p>Name</p>
            <p>E-mail</p>
          </div>

          <div className="table-container">
            <div className="table">
              <DataTable columns={columns} data={data} />
            </div>
          </div>


        </div>

      </div>

    </div>
  )

};

export default User; 