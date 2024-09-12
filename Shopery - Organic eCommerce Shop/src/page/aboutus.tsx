import React from "react";
import Footer from "../component/footer_components/footer";
import Header from "../component/header_component/header";
import Navbar from "../component/header_component/navbar";
import Newsletter from "../component/footer_components/newsletter";

import TopBar from "../component/header_component/topbar";
import AboutUs from "../component/about_us/about_us";
import ClientTestimonials from "../component/footer_components/client_testimonials/client_testimonials";
import Companys from "../component/footer_components/companys";
import { ProductProvider } from "../hooks/useProductContext";

const Aboutus = () => {
  return (
    <div>
      <ProductProvider>
      <TopBar />
      <Header />
      <Navbar />
      <AboutUs />
      <ClientTestimonials />
      <Companys />
      <Newsletter />
      <Footer />
      </ProductProvider>
    </div>
  );
};

export default Aboutus;
