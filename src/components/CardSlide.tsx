import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

const images: string[] = [
  "https://media.vlpt.us/images/holim0/post/7d80e99d-11bc-4327-b16d-324a8daa0014/image.png",
  "https://media.vlpt.us/images/wooder2050/post/3c21dfdf-67b9-4301-8c25-e505303e246a/og-image.png",
  "https://media.vlpt.us/images/edie_ko/post/4631c9fc-fa76-47e9-9d77-bc160476c60a/1_mv73TpGPVFXzJqu920m5Og.png",
  "https://media.vlpt.us/images/dongha1992/post/2efd8b1b-d186-40bc-a574-026f180750ba/react.jpeg",
  "https://media.vlpt.us/images/kimhodol/post/9c9e0ba3-20b1-4ba9-9a66-9af9ab5cf2e6/hodol-typescript.jpg",
  "https://media.vlpt.us/images/wooder2050/post/3c21dfdf-67b9-4301-8c25-e505303e246a/og-image.png",
];
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

const CardSlide = (): JSX.Element => {
  const [pickers, setPickers] = useState<JSX.Element[]>([]);
  const [pickIndex, setPickIndex] = useState<number>(0);
  //custominterval 은 3000(3초)으로 초기화
  const [custominterval, setCustomInterval] = useState(3000);

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
