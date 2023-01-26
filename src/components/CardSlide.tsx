import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
// 이미지를 불러온다.
import img from "../img/imgs1.jpg";
import img2 from "../img/imgs2.jpg";
import img3 from "../img/imgs3.jpg";
// 이미지를 배열에 넣어준다.
const CardSlide = (): JSX.Element => {
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  const [pickIndex, setPickIndex] = useState<number>(0);
  //custominterval 은 3000(3초)으로 초기화
  const [custominterval] = useState(3000);
  // 이미지를 불러온다.
  const onPickIndex = useCallback(
    (idx: number): void => {
      if (pickIndex === idx) {
        // 선택되어 있는 인덱스를 클릭시에는 아무것도 실행하지 않는다.
        return;
      }

      setPickIndex(idx);
    },
    [pickIndex]
  );

  useEffect(() => {
    if (pickIndex === images.length - 1) {
      // 마지막 이미지를 보여주고 있을 때

      setTimeout(() => {
        setPickIndex(0);
      }, custominterval);
    } else {
      setTimeout(() => {
        setPickIndex(pickIndex + 1);
        // 3초마다 pickIndex를 1씩 증가시켜준다.
      }, custominterval);
    }
    // 이미지의 갯수만큼 pickers JSX.Element[] 배열 state에 생성하여 넣어준다.
    setPickers(
      images.map((_: string, idx: number) => {
        return (
          <Picker
            onClick={() => onPickIndex(idx)}
            key={idx}
            background={pickIndex === idx ? "orange" : "white"}
          ></Picker>
        );
      })
    );
  }, [onPickIndex, pickIndex]);
  console.log(images[1]);
  return (
    <Container>
      <FillImage src={images[pickIndex]} />

      <PickerWrapper>
        {pickers}
        {/* 위에서 선언해준 pickers JSX.Element[]들을 렌더링
    map을 해주지 않아도 렌더링이 됨 (JSX.Element[]의 특성) */}
      </PickerWrapper>
    </Container>
  );
};

export default CardSlide;

const images: string[] = [img, img2, img3];

const Container = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
`;

const FillImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PickerWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 30px;
  transform: translate(-50%, -10px);
  display: flex;
`;

const Picker = styled.div<{ background: string }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${(props) => props.background};
  margin: 0 6px;
  cursor: pointer;
`;
