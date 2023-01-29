import SideNav from "../components/SideNav";
import styled from "styled-components";
import CardSlide from "../components/CardSlide";

const MainPage = () => {
  return (
    <CompanyPageWrapper>
      <SideNav />
      <CardSlide />
    </CompanyPageWrapper>
  );
};

export default MainPage;

const CompanyPageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
