import styled from "styled-components";
import { useState } from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  const kakao = "kakao";
  const coupang = "coupang";
  const naver = "naver";
  const line = "line";
  const baemin = "baemin";

  return (
    <div>
      <StyledButton>
        <Link to={"/companyPage/kakao"} state={{ companyName: kakao }}>
          카카오
        </Link>
      </StyledButton>
      <StyledButton>
        <Link to={"/companyPage/coupang"} state={{ companyName: coupang }}>
          쿠팡
        </Link>
      </StyledButton>
      <StyledButton>
        <Link to={"/companyPage/naver"} state={{ companyName: naver }}>
          네이버
        </Link>
      </StyledButton>
      <StyledButton>
        <Link to={"/companyPage/line"} state={{ companyName: line }}>
          라인
        </Link>
      </StyledButton>
      <StyledButton>
        <Link to={"/companyPage/baemin"} state={{ companyName: baemin }}>
          우아한 형제들
        </Link>
      </StyledButton>
    </div>
  );
};

export default SideNav;

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
`;
