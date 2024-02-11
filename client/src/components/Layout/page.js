'use client'
import React from "react";
import Nav from "@/components/navBar/page";
import Header from "../header/page";
import Card from "../card/page";
import Footer from "../footer/page";
const Layout = ({ children }) => {
  return (
    <div>
      <Nav/>
      <Header/>
      
      <section className="text-gray-600 body-font relative">
     
        {children}
        <Card/>
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
