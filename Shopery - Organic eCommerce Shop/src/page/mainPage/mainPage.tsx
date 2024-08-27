import React from "react";
import TopBar from "../../component/Topbar/topbar";
import Header from "../../component/header/header";
import LatestNews from "../../component/LatestNews/latestnews";
import SectionHeader from "../../component/Reusable component/sectionHeader";
import BestDeals from "../../component/best_deals/best_deals";
import ClientTestimonials from "../../component/client_testimonials/client_testimonials";
import Companys from "../../component/companys/companys";
import FeaturedProducts from "../../component/featured_products/featured_products";
import Footer from "../../component/footer/footer";
import HotDeals from "../../component/hot_deals/hot_deals";
import InstagramGallery from "../../component/instagranGallary/instagramgallery";
import Navbar from "../../component/navbar/navbar";
import Newsletter from "../../component/newsletter/newsletter";
import PopularCategories from "../../component/popular_categories/popular_categories";
import PopupModal from "../../component/popupModal/popupModal";
import { products } from "../../component/product_cart/product";
import CartManager from "../../component/product_cart/productManager";
import ProductList from "../../component/product_list/product_list";
import Promocards from "../../component/promocards/promocards";
import Support from "../../component/support/support";

const filteredProducts = products.filter((product) => product.id <= 10);
const featuredProducts = products.filter((product) => product.id <= 5);

const MainPage = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Navbar />
      <CartManager>
        {({ handleAddToCart }) => (
          <>
            <Promocards />
            <Support />
            <PopularCategories />
            <SectionHeader
              linkText="View All"
              title="Popular Products"
              linkUrl=""
            />

            {filteredProducts.length > 0 && (
              <ProductList
                products={filteredProducts}
                onAddToCart={handleAddToCart}
              />
            )}
            <BestDeals />
            <HotDeals onAddToCart={handleAddToCart} products={products} />
            <FeaturedProducts
              onAddToCart={handleAddToCart}
              products={featuredProducts}
            />
            <LatestNews />
            <ClientTestimonials />
            <Companys />
            <InstagramGallery />
            <Newsletter />
            <PopupModal />
          </>
        )}
      </CartManager>
      <Footer />
    </>
  );
};

export default MainPage;
