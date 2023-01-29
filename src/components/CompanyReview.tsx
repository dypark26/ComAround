import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useCalculate from "../hooks/useCalculate";
import { companyState, resetState } from "../redux/module/SurveySlice";
import ProsConsList from "./ProsConsList";
import SurveyModal from "./SurveyModal";

const CompanyReview = () => {
  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];

  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useDispatch();
  const handleOpenModal = () => {
    setModalOpen(!modalOpen);
    dispatch(companyState({ name: urlReqCompanyName }));
  };
  const handleCloseModal = () => {
    setModalOpen(!modalOpen);
    dispatch(resetState());
  };

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

  const wholeAVE = commuteAVE + convenientAVE + restaurantAVE;
  const wholeAVEResult = wholeAVE / 3;

  const urlArray: urlArrayType = {
    kakao: "https://careers.kakao.com/kakaolife",
    naver: "https://recruit.navercorp.com/cnts/tech",
    line: "https://careers.linecorp.com/ko/culture/6",
    coupang: "https://www.coupang.jobs/kr/why-coupang/",
    baemin: "https://www.woowahan.com/company/culture",
  };

  useEffect(() => {
    refetch();
  }, [urlReqCompanyName]);

  return (
    <>
      <ReviewSection>
        <ReviewHeader>
          <CompanyLogo src={`/assets/${urlReqCompanyName}.png`} alt="logo" />
          <CompanyLink
            href={urlArray[urlReqCompanyName]}
            rel="noreferrer"
            target="_blank"
          >
            <img src="/assets/link.png" alt="link" />
            <div>이 회사가 궁금하다면?</div>
          </CompanyLink>
        </ReviewHeader>

        <ContentsContainer>
          <StarListWrapper>
            <div>평점</div>
            <TotalStarReview>
              <div>전체평점</div>
              <StarAVE>
                <LinkIcon src="/assets/star.svg" alt="star" />
                <div className="total-star">{wholeAVEResult.toFixed(1)}</div>
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
  @media (max-width: 1000px) {
    height: 80vh;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const CompanyLogo = styled.img`
  width: 260px;
  height: auto;
  margin-bottom: 60px;
`;

const CompanyLink = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
  color: #21e46f;
  font-size: 24px;
  font-weight: 700;
  border-bottom: solid 1px #21e46f;
  > img {
    width: 36px;
  }
  @media (max-width: 800px) {
    font-size: 18px;
    > img {
      width: 30px;
    }
  }
`;

const LinkIcon = styled.img`
  width: 30px;
  height: auto;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 20px;
  @media (max-width: 1000px) {
    flex-direction: column;
    overflow: scroll;
    gap: 60px;

    ::-webkit-scrollbar {
      width: 12px;
      display: none;
    }
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
    font-weight: 700;
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
  @media (max-width: 1000px) {
    position: sticky;
    bottom: 0;
  }
`;
