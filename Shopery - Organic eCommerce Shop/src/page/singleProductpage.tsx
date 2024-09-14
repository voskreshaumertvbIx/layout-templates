import React from 'react';
import Footer from '../component/footer_components/footer';
import Newsletter from '../component/footer_components/newsletter';
import Header from '../component/header_component/header';
import Navbar from '../component/header_component/navbar';
import TopBar from '../component/header_component/topbar';
import SoloProductpage from '../component/product_cart/soloProductpage';
import { ProductProvider } from '../hooks/useProductContext';
import ProductList from '../component/product_cart/productlist';

const SingleProductpage = () => {
  return (
    <div>
       <ProductProvider>
      <TopBar />
      <Header />
      <Navbar />
      <SoloProductpage/>
      <ProductList limit={5}/>
      <Newsletter />
      <Footer />
    </ProductProvider>
    </div>
  );
}

export default SingleProductpage;
