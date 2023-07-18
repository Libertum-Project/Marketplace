import React, { useState } from "react";
import Frame1 from "./Frame1/Frame1";
import Frame2 from "./Frame2/Frame2";
import ReportofProperties from "./Reportofproperties";
import Modal from "./Modal";

const UserDashboard = () => {
  const [showModal, setShowModal] = useState(true); // Inicialmente mostrar el modal

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      {showModal && <Modal onClose={handleCloseModal} />}

      <Frame1 />
      <Frame2 />
      <ReportofProperties />
    </div>
  );
};

export default UserDashboard;
