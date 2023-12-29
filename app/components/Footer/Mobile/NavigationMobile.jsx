'use client'
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import css from "./Navigation.module.css";

const NavigationMobile = () => {


  const navigation = [
    {
      icon: "/bottomnavigation/home.svg",
      href: "https://www.libertum.io/"
    },
    {
      icon: "/bottomnavigation/saved.svg",
      href: "/saved"
    },
    {
      icon: "/bottomnavigation/contact.svg",
      href: "https://libertum.io/contact"
    },
    {
      icon: "/bottomnavigation/dashboard.svg",
      href: "/dashboard"
    },
  ]

  return(
    <div className={css.container}>

      <div className={css.links}>
      {navigation.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={css.icon}
          >
            <Image
              src={item.icon}
              alt={`Icon ${index}`}
              width={30}
              height={30}
            />
          </Link>
        ))}
      </div>
      
    </div>
  )
}; 


export default NavigationMobile; 