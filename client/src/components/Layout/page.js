'use client'
import React from "react";
import Nav from "@/components/navBar/page";
import Header from "../header/page";
import Card from "../card/page";
import Footer from "../footer/page";
import Mail from "../mail/page";
import PropertyList from "../propertyList/page";
import styles from "./style.module.css"
const Layout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <Header/>
      
      <section className={styles.homeContainer}>
     
        {children}
        <div>
        <h1 className="text-base font-bold">Explore Top Destination</h1>
        <span className="text-xs text-gray-400">Great opportunity to travel and Enjoy Yourself </span>
        </div>
        
        <Card/>
        <h1 className="text-base font-bold">Property type</h1>
        <PropertyList/>
        <Mail/>
       
      </section>
      <Footer />
    </div>
  );
};

export default Layout;
