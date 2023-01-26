import styled from "styled-components";
import StarCard from "../components/StarCard";
import close from "../assets/close-button.svg";
import ProsConsList from "./ProsConsList";
import { supabase } from "../shared/supabaseClient";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { response } from "express";

const SurveyModal = ({ handleModal }: { handleModal: () => void }) => {
  const surveyData = useSelector((state: RootState) => state.surveyData);

  // 값이 잘 변경 되는지 확인
  console.log("교통편의 몇점?", surveyData.commute);
  console.log("편의시설 몇점?", surveyData.convenient);
  console.log("주변맛집 몇점?", surveyData.restaurant);
  console.log("장점1:", surveyData.pros1);
  console.log("장점2:", surveyData.pros2);
  console.log("장점3:", surveyData.pros3);
  console.log("장점4:", surveyData.pros4);
  console.log("장점5:", surveyData.pros5);
  console.log("단점1:", surveyData.cons1);
  console.log("단점2:", surveyData.cons2);
  console.log("단점3:", surveyData.cons3);
  console.log("단점4:", surveyData.cons4);
  console.log("단점5:", surveyData.cons5);

  // Supabase로 데이터 포스트하는 함수
  const postSurveyData = async () => {
    const response = await supabase.from("SurveyData").insert(surveyData);

    if (response) {
      alert("설문조사 제출완료!");
    }

    if (response.error) {
      console.log("error", response.error);
    }
  };

  // 제출버튼 클릭하면, Supabase로 설문조사 데이터 제출
  const handleSubmit = () => {
    postSurveyData();
  };

  return (
    <>
      <ModalSection>
        <ModalCloseButton onClick={handleModal}>
          <img src={close} alt="close button" style={{ display: "block" }} />
        </ModalCloseButton>
        <Title>네이버 본사 근처에 대해 알려주세요!</Title>
        <ContentsContainer>
          <StarListWrapper>
            <div>평점</div>
            <StarCard listType={"commute"}>교통편의</StarCard>
            <StarCard listType={"convenient"}>편의시설</StarCard>
            <StarCard listType={"restaurant"}>주변맛집</StarCard>
          </StarListWrapper>
          <ProsConsList listType={"pros"}>이런점이 좋아요</ProsConsList>
          <ProsConsList listType={"cons"}>이런점이 아쉬워요</ProsConsList>
        </ContentsContainer>
        <SubmitButton onClick={handleSubmit}>제출하기</SubmitButton>
      </ModalSection>
      <ModalBackground />
    </>
  );
};

export default SurveyModal;

const ModalSection = styled.section`
  width: 1200px;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  background-color: white;
  border-radius: 20px;
  animation: 0.5s;
  overflow: hidden;
  padding: 32px;
  display: flex;
  flex-direction: column;
`;

const ModalCloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  background: none;
  border: none;
  padding: 12px;
  cursor: pointer;
`;

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 40%;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 56px;
`;
const ContentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  margin-bottom: 32px;
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

const SubmitButton = styled.button`
  align-self: flex-end;
  height: fit-content;
  width: fit-content;
  border-radius: 10px;
  border: none;
  padding: 16px 84px;
  background-color: #2f3338;
  color: #62ffa1;
  font-weight: 700;
  font-size: 24px;
  :hover {
    cursor: pointer;
  }
`;
