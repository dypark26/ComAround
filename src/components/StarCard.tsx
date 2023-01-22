import { useState } from 'react';
import StarRatings from 'react-star-ratings';
import styled from 'styled-components';

const StarCard = ({ children }: { children: string }) => {
  const [starRate, setStarRate] = useState(0);
  const handleStarRating = (rating: number) => {
    setStarRate(rating);
  };
  return (
    <CardWrapper>
      <Title>{children}</Title>
      <StarRatings
        name="rating"
        rating={starRate}
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
