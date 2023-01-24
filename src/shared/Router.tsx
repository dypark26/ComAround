import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompanyPage from "../pages/CompanyPage";
import MainPage from "../pages/MainPage";
import Map from "../components/Map";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/:id" element={<CompanyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
