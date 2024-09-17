
import { ProductProvider } from "../hooks/useProductContext";
import Checkout from "../component/product_cart/checkout";
import Header from "../component/header_component/header";
import Navbar from "../component/header_component/navbar";
import TopBar from "../component/header_component/topbar";
import Newsletter from "../component/footer_components/newsletter";
import Footer from "../component/footer_components/footer";

const CheckoutPage = () => {
  return (
    <ProductProvider>
      <TopBar />
      <Header />
      <Navbar />
      <Checkout />
      <Newsletter />
      <Footer />
    </ProductProvider>
  );
};

export default CheckoutPage;
