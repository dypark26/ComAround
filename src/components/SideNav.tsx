import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface Props {
  children: JSX.Element;
  menuName: string;
  path: string;
}
interface ContainerProps {
  focus: boolean;
}

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  font-size: 1.5rem;
  font-weight: 600;
  transition: all 0.5s ease-in-out;

  &:hover {
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: black;
  }
`;

const NavBar = styled.div`
  width: 20%;
  height: 100%;
  background-color: #d9d9d9;
  justify-content: center;
`;

const Menu = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const MenuItem = styled.div`
  width: 90%;
  height: 50px;
  margin: 10px;
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-bottom: 3px solid black;
  border-top: 3px solid black;
  border-left: 3px solid black;
  border-right: 3px solid black;
`;

const menuList = [
  { menuName: "ComAround", path: "/mainpage", focus: true },
  { menuName: "네이버", path: "/companypage", focus: false },
  { menuName: "카카오", path: "/companypage" },
  { menuName: "라인", path: "/companypage" },
  { menuName: "쿠팡", path: "/companypage" },
  { menuName: "우아한 형제들", path: "/companypage" },
];

const Sidebar = ({ children, path }: Props) => {
  const { pathname } = useLocation();
  const focus = pathname === path ? true : false;
  return (
    <Container focus={focus}>
      <NavBar>
        <Menu>
          {menuList.map((menu) => (
            <MenuItem key={menu.menuName}>
              <Link to={menu.path}>{menu.menuName}</Link>
            </MenuItem>
          ))}
        </Menu>
      </NavBar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Sidebar;
