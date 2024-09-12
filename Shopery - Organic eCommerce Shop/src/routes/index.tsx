import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import LoginPage from "../page/loginPage";
import MainPage from "../page/mainPage";
import RegisterPage from "../page/registerPage";
import BlogPage from "../page/blogPage";
import SingleBlogPage from "../page/singleblogpage";
import Aboutus from "../page/aboutus";
import Categories from "../page/categories";
import ContactPage from "../page/contactus";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.mainPage} element={<MainPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage />} />
      <Route path={ROUTES.categories} element={<Categories />} />
      <Route path={`${ROUTES.blog}/:id`} element={<SingleBlogPage />} />
      <Route path={ROUTES.blog} element={<BlogPage />} />
      <Route path={ROUTES.aboutus} element={<Aboutus />} />
      <Route path={ROUTES.contactus} element={<ContactPage />} />
    </Routes>
  );
};

export default AppRoutes;
