import React from 'react';
import style from './PopUpMarket.module.scss';
import { Link } from 'react-router-dom';
import { IoGridOutline, IoArrowForward } from 'react-icons/io5';
import { TbVector } from 'react-icons/tb';

function PopUpMarket({ setActive }) {
  return (
    <div className={style.Container} data-dropdown>
      <div className={style.flexContainer}>
        <Link
          to="/"
          className={style.button}
          onClick={() => setActive(false)}
        >
          <div className={style.icon}>
            <IoGridOutline />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Property Marketplace</h1> <IoArrowForward />
            </div>
            <p>Buying and selling houses has never been so easy</p>
          </div>
        </Link>

        <a href="/peertopeer" className={style.button}>
          <div className={style.icon}>
            <TbVector />
          </div>
          <div className={style.text}>
            <div className={style.title}>
              <h1>Peer to Peer Market</h1> <IoArrowForward />
            </div>
            <p>Be part of the real estate revolution</p>
          </div>
        </a>
      </div>
    </div>
  );
}

export default PopUpMarket;
