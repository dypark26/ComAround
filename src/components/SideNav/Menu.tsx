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
  { menuName: "네이버", path: "/" },
  { menuName: "카카오", path: "/portfolio" },
  { menuName: "라인", path: "/info" },
  { menuName: "쿠팡", path: "/etc" },
  { menuName: "우아한 형제들", path: "/etc" },
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
