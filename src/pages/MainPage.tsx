import SideNav from "../components/SideNav";
import CardSlide from "../components/CardSlide";
import styled from "styled-components";

const MainPage = () => {
  return (
    <CompanyPageWapper>
      <SideNav />
      <CardSlide />
    </CompanyPageWapper>
  );
};

export default MainPage;

const CompanyPageWapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
