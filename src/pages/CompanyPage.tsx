import styled from "styled-components";
import Map from "../components/Map";
import SideNav from "../components/SideNav";
import CompanyReview from "../components/CompanyReview";

const CompanyPage = () => {
  return (
    <CompanyPageContainer>
      <SideNav />
      <MainArea>
        <Map />
        <CompanyReview />
      </MainArea>
    </CompanyPageContainer>
  );
};

export default CompanyPage;

const CompanyPageContainer = styled.div`
  display: flex;
  width: 100%;
`;

const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 200px);
  height: 100vh;

  @media (max-width: 768px) {
    width: 80%;
  }
`;
