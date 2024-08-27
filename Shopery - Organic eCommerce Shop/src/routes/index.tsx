import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./routes";
import LoginPage from "../page/loginPage/loginPage";
import MainPage from "../page/mainPage/mainPage";
import RegisterPage from "../page/registerPage/registerPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.mainPage} element={<MainPage />} />
      <Route path={ROUTES.login} element={<LoginPage />} />
      <Route path={ROUTES.register} element={<RegisterPage/>} />
    </Routes>
  );
};

export default AppRoutes;
