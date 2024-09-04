import Footer from "../../component/footer/footer";
import Header from "../../component/header/header";
import Navbar from "../../component/navbar/navbar";
import Newsletter from "../../component/newsletter/newsletter";
import CartManager from "../../component/product_cart/productManager";
import TopBar from "../../component/Topbar/topbar";
import Singlepage from "../../component/Blog/singlepage";

const SingleBlogPage = () => {
  return (
    <CartManager>
      {({ cartCount, cartTotal }) => (
        <>
          <TopBar />
          <Header cartCount={cartCount} cartTotal={cartTotal} />
          <Navbar />

          <Singlepage />

          <Newsletter />
          <Footer />
        </>
      )}
    </CartManager>
  );
};

export default SingleBlogPage;
