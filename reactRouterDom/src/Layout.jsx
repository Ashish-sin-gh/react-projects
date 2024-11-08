import React from "react";
import Header from "./components/header/header";
import { Outlet } from "react-router-dom";
import Footer from "./components/footer/footer";

export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* outlet is somrthing that is capable of changing component i.e. it makes the layout dynamic as u can put different component here */}
      <Footer />
    </>
  );
}
