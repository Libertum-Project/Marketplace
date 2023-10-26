import { useState } from "react";
import css from "./Tokens.module.scss"; 
import DataTable from "react-data-table-component";
import User from "./User/User";

const columns = [
  {
    name: "User",
    selector: (row) => row.user,
  },
  {
    name: "Tokens purchased",
    selector: (row) => row.tokens,
  },
  
  {
    name: "View user",
    selector: (row) => row.view,
    cell: (row) => <button>{row.view}</button>,
  },
];

const Tokens = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };


  const data = [{
    user: 'Niki',
    tokens: 3,
    view: <button onClick={openModal}>View</button>
  }]


  return (
    <div className={css.container}>
      <div className={css.table}>
        <h3>LBM - PreSale</h3>
        <DataTable columns={columns} data={data} />
      </div>
      {isModalOpen && <User closeModal={closeModal} />}
    </div>
  );
};

export default Tokens; 