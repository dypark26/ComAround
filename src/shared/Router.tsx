import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyPage from "../pages/CompanyPage";
import MainPage from "../pages/MainPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/companyPage/:id" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
