import React from "react";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to={`companyPage/company`}>company</Link>
    </div>
  );
};

export default MainPage;
