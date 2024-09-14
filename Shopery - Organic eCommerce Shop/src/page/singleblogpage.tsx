import Footer from "../component/footer_components/footer";
import Header from "../component/header_component/header";
import Navbar from "../component/header_component/navbar";
import Newsletter from "../component/footer_components/newsletter";

import TopBar from "../component/header_component/topbar";
import Singlepage from "../component/Blog/singlepage";
import { ProductProvider } from "../hooks/useProductContext";

const SingleBlogPage = () => {
  return (
    <ProductProvider>
      <TopBar />
      <Header />
      <Navbar />
      <Singlepage />
      <Newsletter />
      <Footer />
    </ProductProvider>
  );
};

export default SingleBlogPage;
