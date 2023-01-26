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
  justify-content: space-between;
`;

const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(100% - 300px);
  height: 100vh;
`;
