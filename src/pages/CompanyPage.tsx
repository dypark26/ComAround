import styled from 'styled-components';

const CompanyPage = () => {
  return (
    <CompanyPageContainer>
      <SideNav>SideNav</SideNav>
      <MainArea>
        <Map>Map</Map>
        <CompanyReview>CompanyReview</CompanyReview>
      </MainArea>
    </CompanyPageContainer>
  );
};

export default CompanyPage;

const CompanyPageContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const SideNav = styled.div`
  width: 300px;
  height: 100vh;
  background-color: aqua;
`;
const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(100% - 300px);
  height: 100vh;
`;
const Map = styled.div`
  height: 50vh;
  background-color: beige;
`;
const CompanyReview = styled.div`
  height: 50vh;
  background-color: tomato;
`;
