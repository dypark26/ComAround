import { useState } from "react";
import styled from "styled-components";
import SurveyModal from "../components/SurveyModal";

const CompanyPage = () => {
  // 설문조사 하러가기 버튼 누를 때마다 모달창 on / off
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <CompanyPageContainer>
      <SideNav>SideNav</SideNav>
      <MainArea>
        <Map>Map</Map>
        <CompanyReview>
          <div>companyReview</div>
          <SurveyButton onClick={handleModal}>설문조사 하러가기</SurveyButton>
        </CompanyReview>
      </MainArea>
      {modalOpen ? <SurveyModal handleModal={handleModal} /> : null}
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: tomato;
  gap: 20px;
`;

const SurveyButton = styled.button`
  width: 30vw;
  height: 10vh;
  background-color: beige;
  border: none;
  border-radius: 20px;
`;
