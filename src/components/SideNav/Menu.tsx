import React from "react";
import styled from "styled-components";
import MenuItem from "./MenuItem";

const Container = styled.div`
  ul {
    margin: 10px;
    padding: 10px;
  }
`;

const menuList = [
  { menuName: "메인", path: "/" },
  { menuName: "네이버", path: "../pages/CompanyPage" },
  { menuName: "카카오", path: "../../pages/CompanyPage" },
  { menuName: "라인", path: "../../pages/CompanyPage" },
  { menuName: "쿠팡", path: "../../pages/CompanyPage" },
  { menuName: "우아한 형제들", path: "../../pages/CompanyPage" },
];

const Menu = () => {
  return (
    <Container>
      <ul>
        {menuList.map((data) => {
          return (
            <MenuItem
              key={data.menuName}
              menuName={data.menuName}
              path={data.path}
            />
          );
        })}
      </ul>
    </Container>
  );
};

export default Menu;
