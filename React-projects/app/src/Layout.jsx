import React from "react";
import Header from "./projects/reactRouter/header/Header";
import Footer from "./projects/reactRouter/footer/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
