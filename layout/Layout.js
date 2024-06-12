import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React, { Children } from "react";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
