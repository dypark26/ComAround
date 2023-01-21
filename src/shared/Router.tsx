import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lightTheme, darkTheme } from "../styles/theme";
import CompanyPage from "../pages/CompanyPage";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
