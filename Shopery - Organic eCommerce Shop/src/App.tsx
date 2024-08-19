import React from "react";
import Header from "./component/header/header";
import Navbar from "./component/navbar/navbar";
import PopularCategories from "./component/popular_categories/popular_categories";
import Promocards from "./component/promocards/promocards";
import Support from "./component/support/support";
import TopBar from "./component/Topbar/topbar";
import ProductList from "./component/product_list/product_list";
import CartManager from "./component/product_cart/productManager";
import { products } from "./component/product_cart/product";

const App: React.FC = () => {
  return (
    <>
      <TopBar />
      <CartManager>
        {({ cartTotal, cartCount, handleAddToCart }) => (
          <>
            <Header cartTotal={cartTotal} cartCount={cartCount} />
            <Navbar />
            <Promocards />
            <Support />
            <PopularCategories />
            <ProductList products={products} onAddToCart={handleAddToCart} />
          </>
        )}
      </CartManager>
    </>
  );
};

export default App;
