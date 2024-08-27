import React from "react";
import Header from "../../component/header/header";
import TopBar from "../../component/Topbar/topbar";
import Footer from "../../component/footer/footer";
import Navbar from "../../component/navbar/navbar";
import Newsletter from "../../component/newsletter/newsletter";
import Register from "../../component/SignUp/SignUp";

const RegisterPage = () => {
  return (
    <div className="flex h-[1176px] justify-between flex-col">
      <div>
        <TopBar />
        <Header />
        <Navbar />
      </div>
      <div>
        <Register />
      </div>
      <div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default RegisterPage;
