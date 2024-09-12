import React from "react";
import TopBar from "../component/header_component/topbar";
import Header from "../component/header_component/header";
import LatestNews from "../component/Blog/LatestNews/latestnews";
import SectionHeader from "../component/Reusable component/sectionHeader";
import BestDeals from "../component/main_content_comps/best_deals";
import ClientTestimonials from "../component/footer_components/client_testimonials/client_testimonials";
import Companys from "../component/footer_components/companys";
import FeaturedProducts from "../component/main_content_comps/featured_products";
import Footer from "../component/footer_components/footer";
import HotDeals from "../component/main_content_comps/hot_deals/hot_deals";
import InstagramGallery from "../component/footer_components/instagramgallery";
import Navbar from "../component/header_component/navbar";
import Newsletter from "../component/footer_components/newsletter";

import PopupModal from "../component/popupModal/popupModal";
import Promocards from "../component/main_content_comps/promocards";
import Support from "../component/main_content_comps/support";
import { ProductProvider } from "../hooks/useProductContext";
import ProductList from "../component/product_cart/productlist";
import PopularCategories from "../component/main_content_comps/popular_categories";

const MainPage = () => {
  return (
    <ProductProvider>
      <TopBar />

      <Header />
      <Navbar />
      <Promocards />
      <Support />
      <PopularCategories />
      <SectionHeader linkText="View All" title="Popular Products" linkUrl="" />
      <ProductList limit={10} />
      <BestDeals />
      <HotDeals />
      <FeaturedProducts />
      <LatestNews />
      <ClientTestimonials />
      <Companys />
      <InstagramGallery />
      <Newsletter />
      <PopupModal />
      <Footer />
    </ProductProvider>
  );
};

export default MainPage;
