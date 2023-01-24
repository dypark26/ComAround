import styled from "styled-components";
import StarCard from "../components/StarCard";
import close from "../assets/close-button.svg";
import ProsConsList from "./ProsConsList";
import { supabase } from "../shared/supabaseClient";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";

const SurveyModal = ({ handleModal }: { handleModal: () => void }) => {
  // Supabase post 테스트
  const surveyData = useSelector((state: RootState) => state.surveyData);
  console.log("surveyData", surveyData);

  const postSurveyData = async () => {
    const response = await supabase.from("SurveyData").insert(surveyData);
    if (response.error) {
      console.log("error", response.error);
    }
  };

  // Supabase surveyData 제출
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
            <StarCard>교통편의</StarCard>
            <StarCard>편의시설</StarCard>
            <StarCard>주변맛집</StarCard>
          </StarListWrapper>
          <ProsConsList section="pros">이런점이 좋아요</ProsConsList>
          <ProsConsList section="cons">이런점이 아쉬워요</ProsConsList>
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
