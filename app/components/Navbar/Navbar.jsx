"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.css";
import {
  ChatBubbleLeftIcon,
  DocumentTextIcon,
  HomeIcon,
  DevicePhoneMobileIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

const Navbar = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  const handleNavToggle = () => {
    setNavOpen(!isNavOpen);
  };

  const menuItems = [
    {
      name: "Home",
      // href: "",
      href: "https://www.libertum.io/",
      target: "",
      icon: HomeIcon,
    },
    {
      name: "Support",
      // href: "/support",
      href: "https://www.libertum.io/support",
      target: "",
      icon: ChatBubbleLeftIcon,
    },
    {
      name: "Buy LBM",
      // href: "/ico",
      href: "https://www.libertum.io/ico",
      target: "",
      icon: CurrencyDollarIcon,
    },
    {
      name: "WaitList",
      href: "https://www.libertum.io/subscribe",
      target: "",
      icon: DevicePhoneMobileIcon,
    },
    {
      name: "Whitepaper",
      href: "/whitepaperLibertum.pdf",
      target: "_blank",
      icon: DocumentTextIcon,
    },
  ];

  return (
    <header id="navbar" className={styles.mainHeader}>
      <div className={styles.header}>
        <Link href="/" prefetch={false}>
          <Image
            src="/assets/imagoTipo.svg"
            alt="logo"
            width="180"
            height="120"
          />
        </Link>

        <div className={styles.btnNav} onClick={handleNavToggle}>
          {isNavOpen ? (
            <svg
              className={styles.iconMenu}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          ) : (
            <svg
              className={styles.iconMenu}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          )}
        </div>
      </div>

      <nav className={`${styles.nav} ${isNavOpen ? styles.open : ""}`}>
        <h1>MENU</h1>
        <ul className={styles.navigation}>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link href={item.href} passHref>
                <p>
                  {item.icon && <item.icon className={styles.icon} />}
                  <span className={styles.name}>{item.name}</span>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
