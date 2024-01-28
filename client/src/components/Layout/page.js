import React from "react";
import Nav from "@/components/navBar/page";
import Footer from "../footer/page";
import Header from "../header/page";
import Card  from "../header/page";


const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Header/>
      {/* <Card /> */}
      <section className="text-gray-600 body-font relative">
        {children}
        <Footer />
      </section>
    </div>
  );
};

export default Layout;
