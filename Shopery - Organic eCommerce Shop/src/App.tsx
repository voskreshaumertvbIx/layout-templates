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
import BestDeals from "./component/best_deals/best_deals";
import HotDeals from "./component/hot_deals/hot_deals";
import FeaturedProducts from "./component/featured_products/featured_products";
import SectionHeader from "./component/Reusable component/sectionHeader";
import LatestNews from "./component/LatestNews/latestnews";
import ClientTestimonials from "./component/client_testimonials/client_testimonials";
import Companys from "./component/companys/companys";
import InstagramGallery from "./component/instagranGallary/instagramgallery";
import Newsletter from "./component/newsletter/newsletter";
import Footer from "./component/footer/footer";


const App: React.FC = () => {
 
  const filteredProducts = products.filter(product => product.id <= 10);
  const featuredProducts = products.filter(product => product.id <= 5);
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
            <SectionHeader linkText="View All" title="Popular Products" linkUrl=''/>

            {filteredProducts.length > 0 && (
              <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />
            )}
            <BestDeals />
            <HotDeals onAddToCart={handleAddToCart} products={products} />
            <FeaturedProducts onAddToCart={handleAddToCart} products={featuredProducts}/>
            <LatestNews/>
            <ClientTestimonials/>
            <Companys/>
            <InstagramGallery/>
            <Newsletter/>
            <Footer/>
           
          </>
        )}
      </CartManager>
    </>
  );
};

export default App;
