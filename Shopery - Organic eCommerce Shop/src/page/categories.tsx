import React from "react";
import TopBar from "../component/header_component/topbar";
import Header from "../component/header_component/header";
import Navbar from "../component/header_component/navbar";
import ProductFilter from "../component/categories/categories";
import Newsletter from "../component/footer_components/newsletter";
import Footer from "../component/footer_components/footer";
import { ProductProvider } from "../hooks/useProductContext";

const Categories = () => {
  return (
    <ProductProvider>
      <TopBar />
      <Header />
      <Navbar />
      <ProductFilter />
      <Newsletter />
      <Footer />
    </ProductProvider>
  );
};

export default Categories;
