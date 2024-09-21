import React from "react";
import Header from "../component/header_component/header";
import TopBar from "../component/header_component/topbar";
import Footer from "../component/footer_components/footer";
import Login from "../component/header_component/SignIn/SignIn";
import Navbar from "../component/header_component/navbar";
import Newsletter from "../component/footer_components/newsletter";
import { ProductProvider } from "../hooks/useProductContext";

const LoginPage = () => {
  return (
    <ProductProvider>
    <div className="flex h-[1176px] flex-col justify-between">
      <div>
        <TopBar />
        <Header />
        <Navbar />
      </div>
      <div className="container">
        <Login />
      </div>
      <div>
        <Newsletter />
        <Footer />
      </div>
    </div>
    </ProductProvider>
  );
};

export default LoginPage;
