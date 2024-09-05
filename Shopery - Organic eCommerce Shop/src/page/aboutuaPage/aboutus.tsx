import React from 'react';
import Footer from '../../component/footer/footer';
import Header from '../../component/header/header';
import Navbar from '../../component/navbar/navbar';
import Newsletter from '../../component/newsletter/newsletter';
import CartManager from '../../component/product_cart/productManager';
import TopBar from '../../component/Topbar/topbar';
import AboutUs from '../../component/about_us/about_us';
import ClientTestimonials from '../../component/client_testimonials/client_testimonials';
import Companys from '../../component/companys/companys';


const Aboutus = () => {
  return (
    <div>
      <CartManager>
      {({ cartCount, cartTotal }) => (
        <>
          <TopBar />
          <Header cartCount={cartCount} cartTotal={cartTotal} />
          <Navbar />
          <AboutUs/>
          <ClientTestimonials/>
          <Companys />
          <Newsletter />
          <Footer />
        </>
      )}
    </CartManager>
    </div>
  );
}

export default Aboutus;
