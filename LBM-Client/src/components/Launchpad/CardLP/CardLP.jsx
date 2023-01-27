import { useState } from "react";

import icoBanner from "./assets/ico-banner.png";
import icoLogo from "./assets/ico-logo.png";
import ireoBanner from "./assets/ireo-banner.png";
import ireoLogo from "./assets/ireo-logo.png";
import builtOn from "./assets/built-on.svg";
import "./CardLP.scss";

export default function CardLP({
  state,
  type,
  name,
  per,
  launched_on,
  total_raise,
  token_price,
  status,
  description,
}) {
  const [details, setDetails] = useState("offerings");
  // Hardcodeo para diferenciar
  const banner = type === "ICO" ? icoBanner : ireoBanner;
  const logo = type === "ICO" ? icoLogo : ireoLogo;

  const [progress, setProgress] = useState(70);

  return (
    <main className="container">
      <header className="banner" style={{ backgroundImage: `url(${banner})` }}>
        <img src={logo} className="logoD" />
      </header>
      <div className="props">
        <section className="info">
          <div className="info_title">
            <h3>{name}</h3>
            <span>
              Project built on
              <img src={builtOn} />
            </span>
          </div>
          <div className="info_bar">
            <span className="info_for">For</span>
            <span className="info_per">{per}K</span>
          </div>
          <div
            style={{
              marginTop: "15px",
              width: "100%",
              height: "8px",
              background: "gray",
              borderRadius: "12px",
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                background: "#18DF8B",
                height: "8px",
                borderRadius: "12px",
              }}
            ></div>
          </div>
        </section>
        <section className="details">
          <div>
            <span
              onClick={() => setDetails("offerings")}
              className={`menu_item ${details === "offerings" && "active"}`}
            >
              Offerings
            </span>
            <span
              onClick={() => setDetails("description")}
              className={`menu_item ${details === "description" && "active"}`}
            >
              Description
            </span>
          </div>
          <div>
            {details === "offerings" ? (
              // UPCOMING ITEMS
              state === "upcoming" ? (
                <div className="offerings">
                  <div className="offerings_item">
                    <span className="offerings-item_title">Lottery status</span>
                    <span className="offerings-value">{status}</span>
                  </div>
                  <div className="offerings_item">
                    <span className="offerings-item_title">Total Raise</span>
                    <span className="offerings-value">${total_raise}</span>
                  </div>
                  <div className="offerings_item">
                    <span className="offerings-item_title">
                      To be launched on
                    </span>
                    <span className="offerings-value">{launched_on}</span>
                  </div>
                </div>
              ) : (
                // ENDED ITEMS
                <div className="offerings">
                  <div className="offerings_item">
                    <span className="offerings-item_title">Launched on</span>
                    <span className="offerings-value">{launched_on}</span>
                  </div>
                  <div className="offerings_item">
                    <span className="offerings-item_title">Total Raise</span>
                    <span className="offerings-value">${total_raise}</span>
                  </div>
                  <div className="offerings_item">
                    <span className="offerings-item_title">
                      Token price for IDO
                    </span>
                    <span className="offerings-value">${token_price}</span>
                  </div>
                </div>
              )
            ) : (
              <div>
                <div className="description">{description}</div>
              </div>
            )}
          </div>
        </section>
      </div>
      <button className="button">See details</button>
    </main>
  );
}