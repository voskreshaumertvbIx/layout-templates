import React from "react";
import Header from "../../component/header/header";
import TopBar from "../../component/Topbar/topbar";
import Footer from "../../component/footer/footer";
import Login from "../../component/SignIn/SignIn";
import Navbar from "../../component/navbar/navbar";
import Newsletter from "../../component/newsletter/newsletter";
import CartManager from "../../component/product_cart/productManager";

const LoginPage = () => {
  return (
    <div className="flex h-[1176px] justify-between flex-col">
      <div>
        <TopBar />
        <CartManager>
        {({ cartCount, cartTotal }) => (
        <Header cartCount={cartCount} cartTotal={cartTotal}/>
        )}
        </CartManager>
        <Navbar />
      </div>
      <div>
        <Login />
      </div>
      <div>
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default LoginPage;
