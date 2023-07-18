import React from 'react';
import styles from './Modal.module.css';


const Modal = ({ onClose }) => {
  return (
    <div className={styles['modal-container']}>
      <div className={styles['modal-content']}>
        <p>From 'Products' you can access the marketplace!</p>
        <button onClick={onClose}>Ok</button>
      </div>
    </div>
  );
};

export default Modal;
