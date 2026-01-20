import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <h1>Layout</h1>
      <main className="content">{children}</main>
      <Footer />
    </div>
  );
};
export default Layout;
