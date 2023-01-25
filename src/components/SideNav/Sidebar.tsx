import styled from "styled-components";
import Menu from "./Menu";
import Switch from "./Switch";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const NavBar = styled.div`
  width: 300px;
  height: 100%;
  background-color: ${({ theme }) => theme.secondary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
`;

interface Props {
  children: JSX.Element;
}

const Sidebar = ({ children }: Props) => {
  return (
    <Container>
      <NavBar>
        <Switch />
        <Menu />
      </NavBar>
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
};

export default Sidebar;
