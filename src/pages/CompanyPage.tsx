import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import SurveyModal from "../components/SurveyModal";
import Map from "../components/Map";
import SideNav from "../components/SideNav";
import { useLocation } from "react-router-dom";
import useCalculate from "../hooks/useCalculate";

const CompanyPage = () => {
  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];

  const {
    totalPros: totalPros1,
    totalAVE: commuteAVE,
    refetch,
  } = useCalculate(urlReqCompanyName, "pros1", "commute");

  const { totalPros: totalPros2, totalAVE: convenientAVE } = useCalculate(
    urlReqCompanyName,
    "pros2",
    "convenient"
  );

  const { totalPros: totalPros3, totalAVE: restaurantAVE } = useCalculate(
    urlReqCompanyName,
    "pros3",
    "restaurant"
  );

  const { totalPros: totalPros4 } = useCalculate(
    urlReqCompanyName,
    "pros4",
    "restaurant"
  );
  const { totalPros: totalPros5 } = useCalculate(
    urlReqCompanyName,
    "pros5",
    "restaurant"
  );

  const { totalPros: totalCons1 } = useCalculate(
    urlReqCompanyName,
    "cons1",
    "restaurant"
  );
  const { totalPros: totalCons2 } = useCalculate(
    urlReqCompanyName,
    "cons2",
    "restaurant"
  );
  const { totalPros: totalCons3 } = useCalculate(
    urlReqCompanyName,
    "cons3",
    "restaurant"
  );
  const { totalPros: totalCons4 } = useCalculate(
    urlReqCompanyName,
    "cons4",
    "restaurant"
  );
  const { totalPros: totalCons5 } = useCalculate(
    urlReqCompanyName,
    "cons5",
    "restaurant"
  );

  useEffect(() => {
    refetch();
  }, [urlReqCompanyName]);

  // 설문조사 하러가기 버튼 누를 때마다 모달창 on / off
  const [modalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <CompanyPageContainer>
      <SideNav />
      <MainArea>
        <Map />
        <CompanyReview>
          <div>
            <h2>평균점수</h2>
            <h3>commuteAVE:{commuteAVE}</h3>
            <h3>convenientAVE:{convenientAVE}</h3>
            <h3>restaurantAVE:{restaurantAVE}</h3>
          </div>

          <div>
            <h2>장점/단점 합계</h2>
            <h3>totalPros1:{totalPros1}</h3>
            <h3>totalPros2:{totalPros2}</h3>
            <h3>totalPros3:{totalPros3}</h3>
            <h3>totalPros4:{totalPros4}</h3>
            <h3>totalPros5:{totalPros5}</h3>
            <h3>totalCros1:{totalCons1}</h3>
            <h3>totalCros1:{totalCons2}</h3>
            <h3>totalCros1:{totalCons3}</h3>
            <h3>totalCros1:{totalCons4}</h3>
            <h3>totalCros1:{totalCons5}</h3>
          </div>

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

const MainArea = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: calc(100% - 300px);
  height: 100vh;
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
