import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useCalculate from "../hooks/useCalculate";
import { RootState } from "../redux/config/configStore";
import { companyState, resetState } from "../redux/module/SurveySlice";
import ProsConsList from "./ProsConsList";
import SurveyModal from "./SurveyModal";

const CompanyReview = () => {
  // const surveyData = useSelector((state: RootState) => state.surveyData);

  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];
  // console.log("회사이름!!!:", urlReqCompanyName, typeof urlReqCompanyName);

  // 설문조사 하러가기 버튼 누를 때마다 모달창 on / off
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
    dispatch(companyState({ name: urlReqCompanyName }));
    // console.log("모달 열었을 때 회사는?", surveyData.company);
  };
  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
    dispatch(resetState());
    // console.log("모달 닫았을 때 회사는?", surveyData.company);
  };

  // console.log("모달 회사는?", surveyData.company);

  const { totalAVE: commuteAVE, refetch } = useCalculate(
    urlReqCompanyName,
    "pros1",
    "commute"
  );
  const { totalAVE: convenientAVE } = useCalculate(
    urlReqCompanyName,
    "pros1",
    "convenient"
  );
  const { totalAVE: restaurantAVE } = useCalculate(
    urlReqCompanyName,
    "pros1",
    "restaurant"
  );

  useEffect(() => {
    refetch();
  }, [urlReqCompanyName]);

  return (
    <>
      <ReviewSection>
        <Title src={`/assets/${urlReqCompanyName}.png`} alt="logo" />
        <ContentsContainer>
          <StarListWrapper>
            <div>평점</div>
            <TotalStarReview>
              <div>전체평점</div>
              <StarAVE>
                <img src="/assets/star.svg" alt="star" width={40} />
                <div className="total-star">4.3</div>
              </StarAVE>
            </TotalStarReview>
            <StarReview>
              <div>교통편의</div>
              <StarAVE>
                <img src="/assets/star.svg" alt="star" width={30} />
                <div>{commuteAVE}</div>
              </StarAVE>
            </StarReview>
            <StarReview>
              <div>편의시설</div>
              <StarAVE>
                <img src="/assets/star.svg" alt="star" width={30} />
                <div>{convenientAVE}</div>
              </StarAVE>
            </StarReview>
            <StarReview>
              <div>주변맛집</div>
              <StarAVE>
                <img src="/assets/star.svg" alt="star" width={30} />
                <div>{restaurantAVE}</div>
              </StarAVE>
            </StarReview>
          </StarListWrapper>
          <ProsConsList isModal={false} listType={"pros"}>
            이런점이 좋아요
          </ProsConsList>
          <ProsConsList isModal={false} listType={"cons"}>
            이런점이 아쉬워요
          </ProsConsList>
        </ContentsContainer>
        <SurveyButton onClick={handleOpenModal}>설문조사 하러가기</SurveyButton>
        {modalOpen ? <SurveyModal handleCloseModal={handleCloseModal} /> : null}
      </ReviewSection>
    </>
  );
};

export default CompanyReview;

const ReviewSection = styled.div`
  display: flex;
  flex-direction: column;
  min-width: fit-content;
  height: fit-content;
  padding: 32px;
  background-color: white;
  @media (max-width: 768px) {
    overflow: scroll;
    height: 60vh;
  }
`;

const Title = styled.img`
  width: 260px;
  height: auto;
  margin-bottom: 60px;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    overflow: scroll;
    gap: 60px;
  }
`;

const StarListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-weight: 600;
  font-size: 20px;
  height: fit-content;
  gap: 18px;
`;

const TotalStarReview = styled.div`
  min-width: 200px;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  height: 114px;
  padding: 16px;
  background-color: #f4f6f8;
  border-radius: 10px;
`;

const StarReview = styled.div`
  display: none;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 16px;
  border-bottom: 1px solid #dfdfdf;
`;

const StarAVE = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  gap: 8px;
  .total-star {
    font-size: 40px;
    font-weight: 600;
  }
`;

const SurveyButton = styled.button`
  height: fit-content;
  width: 100%;
  border-radius: 10px;
  border: none;
  padding: 16px;
  background-color: #2f3338;
  color: #62ffa1;
  font-weight: 700;
  font-size: 24px;
  :hover {
    cursor: pointer;
  }
  @media (max-width: 768px) {
    position: sticky;
    bottom: 0;
  }
`;
