import StarRatings from "react-star-ratings";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";
import {
  commuteState,
  convenientState,
  restaurantState,
} from "../redux/module/SurveySlice";

const StarCard = ({ children }: { children: string }) => {
  // 상태값 변경
  const dispatch = useDispatch();
  const commuteData = useSelector(
    (state: RootState) => state.surveyData.commute
  );
  const convenientData = useSelector(
    (state: RootState) => state.surveyData.convenient
  );
  const restaurantData = useSelector(
    (state: RootState) => state.surveyData.restaurant
  );

  const rating =
    children === "교통편의"
      ? commuteData
      : children === "편의시설"
      ? convenientData
      : restaurantData;

  // const handleStarRating = (name: string, rating: number) => {
  //   dispatch(starState({ name: name, value: rating }));
  // };
  const handleStarRating = (rating: number) => {
    children === "교통편의"
      ? dispatch(commuteState({ commute: rating }))
      : children === "편의시설"
      ? dispatch(convenientState({ convenient: rating }))
      : dispatch(restaurantState({ restaurant: rating }));
  };
  console.log("교통편의 몇점?", commuteData);
  console.log("편의시설 몇점?", convenientData);
  console.log("주변맛집 몇점?", restaurantData);

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
