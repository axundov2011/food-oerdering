import Footer from "@/components/layout/footer/Footer";
import Header from "@/components/layout/Header/Header";
import React  from "react";

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
