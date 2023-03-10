import StarRatings from "react-star-ratings";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import { starState } from "../redux/module/SurveySlice";

const StarCard: React.FC<listProps> = ({ listType, children }) => {
  const dispatch = useDispatch();
  const surveyData = useSelector((state: RootState) => state.surveyData);

  const rating =
    children === "교통편의"
      ? surveyData.commute
      : children === "편의시설"
      ? surveyData.convenient
      : surveyData.restaurant;

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

const CardWrapper = styled.div`
  flex-direction: row;
  min-width: 176px;
  flex-grow: 2;
  height: calc(356px / 3 - 32px);
  padding: 16px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 8px 0px #8d8d8d40;
  @media (max-width: 1000px) {
    min-width: fit-content;
  }
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 14px;
`;
