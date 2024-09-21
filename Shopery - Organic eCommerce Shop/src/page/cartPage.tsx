import React from 'react';
import { ProductProvider } from '../hooks/useProductContext';
import CartTable from '../component/product_cart/cartTable';
import Footer from '../component/footer_components/footer';
import Newsletter from '../component/footer_components/newsletter';
import Header from '../component/header_component/header';
import Navbar from '../component/header_component/navbar';
import TopBar from '../component/header_component/topbar';

const CartPage = () => {
  return (
    <div className=''>
    <ProductProvider>
    <TopBar />
    <Header />
    <Navbar />
    <h1 className='text-Heading05 text-gray-900 font-semibold text-center my-8'>My Shopping Cart </h1>
    <CartTable />
    <Newsletter />
    <Footer />
  </ProductProvider>
  </div>
  );
}

export default CartPage;
