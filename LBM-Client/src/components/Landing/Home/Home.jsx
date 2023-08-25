import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import launchapp from "./assets/launchapp.svg";
import NavBar from "../NavBar/NavBar";
import "./Home.scss";

export default function Home() {
  return (
    <main className="home_items" name="home">
      <NavBar />
      <section className="home_section">
        <div>
          <div className="home_text">
            <h1>
              Transforming an Exclusive Market into an <span>Inclusive Opportunity </span>               
              <span> for Everyone </span>
            </h1>
            <p>Transforming the Real Estate Industry by introducing an innovative equity ecosystem where everyone wins.</p>
            <p>
              We solve the limitations of traditional Real Estate investment.
            </p>
          </div>
          <div className="home_links">
            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <Link to={"./marketplace"}>
                <a className="launchapp">
                  <span>Start Earning!</span> <img src={launchapp} />
                </a>
              </Link>
            </motion.div>
            {/* <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }}>
              <a href="/swap" className="token">
                Add Libertum Token
              </a>
            </motion.div> */}
          </div>
        </div>
      </section>
    </main>
  );
}
