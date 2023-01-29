import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const NewCardSlide = () => {
  return (
    <SlideWrapper
      direction={"vertical"}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <StyledSlide>
        <CardImage src="/assets/slide1.png" />
      </StyledSlide>
      <StyledSlide>
        <CardImage src="/assets/slide2.png" />
      </StyledSlide>
      <StyledSlide>
        <CardImage src="/assets/slide3.png" />
      </StyledSlide>
      <StyledSlide>
        <CardImage src="/assets/slide4.png" />
      </StyledSlide>
    </SlideWrapper>
  );
};

export default NewCardSlide;

const SlideWrapper = styled(Swiper)`
  width: 100%;
`;

const StyledSlide = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const CardImage = styled.img`
  width: 70vw;
  border-radius: 20px;
  box-shadow: 0px 0px 18px 10px #5e5e5e40;
`;
