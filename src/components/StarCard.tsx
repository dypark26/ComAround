import StarRatings from "react-star-ratings";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { starState } from "../redux/module/SurveySlice";

const StarCard: React.FC<listProps> = ({ listType, children }) => {
  // store에서 설문조사 상태값 전체 가져오기 (별점, 장단점...)
  const dispatch = useDispatch();
  const surveyData = useSelector((state: RootState) => state.surveyData);

  // 카드 children 값에 따라 교통편의 / 편의시설 / 주변맛집 평점 데이터 뽑아내기
  const rating =
    children === "교통편의"
      ? surveyData.commute
      : children === "편의시설"
      ? surveyData.convenient
      : surveyData.restaurant;

  // 별점 점수 변경할 때마다 변경된 상태값 store에 업데이트 하기
  const handleStarRating = (rating: number) => {
    dispatch(starState({ name: listType, rating: rating }));
  };

  return (
    <CardWrapper>
      <Title>{children}</Title>
      <StarRatings
        name="rating"
        rating={rating}
        changeRating={handleStarRating}
        numberOfStars={5}
        starHoverColor="#FFCE22"
        starRatedColor="#FFCE22"
        starEmptyColor="#EBEBEB"
        starDimension="32px"
        starSpacing="2px"
      />
    </CardWrapper>
  );
};

export default StarCard;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 14px;
`;

const CardWrapper = styled.div`
  flex-direction: row;
  height: calc(356px / 3 - 32px);
  padding: 16px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 8px 0px #8d8d8d40;
`;
