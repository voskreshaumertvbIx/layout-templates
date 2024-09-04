import React from 'react';
import TopBar from '../../component/Topbar/topbar';
import Header from '../../component/header/header';
import Navbar from '../../component/navbar/navbar';
import ProductFilter from '../../component/categories/categories';
import Newsletter from '../../component/newsletter/newsletter';
import Footer from '../../component/footer/footer';
import CartManager from '../../component/product_cart/productManager';

const Categories = () => {
  return (
    <CartManager>
      {({ cartCount, cartTotal, handleAddToCart }) => (
        <>
          <TopBar />
          <Header cartCount={cartCount} cartTotal={cartTotal} />
          <Navbar />
          <ProductFilter handleAddToCart={handleAddToCart} />
          <Newsletter />
          <Footer />
        </>
      )}
    </CartManager>
  );
}

export default Categories;



