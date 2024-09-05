import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import LoginPage from "../page/loginPage/loginPage";
import MainPage from "../page/mainPage/mainPage";
import RegisterPage from "../page/registerPage/registerPage";

import Categories from "../page/categories/categories";
import BlogPage from "../page/blogPage/blogPage";
import SingleBlogPage from "../page/singleBlogPage/singleblogpage";
import Aboutus from "../page/aboutuaPage/aboutus";



const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.mainPage} element={<MainPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage/>} />
      <Route path={ROUTES.categories} element={<Categories/>}/>
      <Route path={`${ROUTES.blog}/:id`} element={<SingleBlogPage/>} />
      <Route path={ROUTES.blog} element={<BlogPage />} />
      <Route path={ROUTES.aboutus} element={<Aboutus/>} />
    
    </Routes>
  );
};

export default AppRoutes;
