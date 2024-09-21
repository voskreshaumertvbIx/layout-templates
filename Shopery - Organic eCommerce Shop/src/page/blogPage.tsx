import { useCallback, useState } from "react";
import Blog from "../component/Blog/blog";
import { blogData, BlogData } from "../component/Blog/blogData";
import Filters from "../component/Blog/filters";
import Pagination from "../component/Blog/pagination";
import Footer from "../component/footer_components/footer";
import Header from "../component/header_component/header";
import Navbar from "../component/header_component/navbar";
import Newsletter from "../component/footer_components/newsletter";
import TopBar from "../component/header_component/topbar";
import { ProductProvider } from "../hooks/useProductContext";

const BlogPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogPerPage] = useState(10);
  const [filteredBlogData, setFilteredBlogData] = useState(blogData);

  const lastBlogIndex = currentPage * blogPerPage;
  const firstBlogIndex = lastBlogIndex - blogPerPage;
  const currentBlog = filteredBlogData.slice(firstBlogIndex, lastBlogIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  const handleFilterChange = useCallback((filteredBlog: BlogData[]): void => {
    setFilteredBlogData(filteredBlog);
    setCurrentPage(1);
  }, []);

  return (
    <div className="">
    <ProductProvider>
      <TopBar />
      <Header />
      <Navbar />
      <div className="hidden max-lg:flex"> <Filters onFilterChange={handleFilterChange} /></div>
      <div className="container">
      <section className="grid mt-12 grid-cols-3 gap-6 max-lg:flex  max-lg:justify-center" >
        
        <div className="max-lg:hidden">
          <Filters onFilterChange={handleFilterChange} />
          
        </div>
        <div className="col-span-2  ">
          <Blog blog={currentBlog}  />
          <Pagination
            currentPage={currentPage}
            blogPerPage={blogPerPage}
            totalBlog={filteredBlogData.length}
            paginate={paginate}
          />
        </div>
      </section>
      </div>
      <Newsletter />
      <Footer />
    </ProductProvider>
    </div>
  );
};

export default BlogPage;
