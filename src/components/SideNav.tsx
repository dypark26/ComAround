import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";

const SideNav = () => {
  const kakao = "kakao";
  const coupang = "coupang";
  const naver = "naver";
  const line = "line";
  const baemin = "baemin";

  const surveyData = useSelector((state: RootState) => state.surveyData);
  console.log("회사이름 잘들어갔어??", surveyData.company);

  return (
    <>
      <StyledSideNav>
        <ComAroundButton>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            <Circle />
            <ComAroundSpan>Com</ComAroundSpan>Around
          </Link>
        </ComAroundButton>
        <BlackButton>
          <Link
            to={"/companyPage/kakao"}
            state={{ companyName: kakao }}
            style={{ textDecoration: "none", color: "black" }}
          >
            카카오
          </Link>
        </BlackButton>
        <StyledButton>
          <Link
            to={"/companyPage/coupang"}
            state={{ companyName: coupang }}
            style={{ textDecoration: "none", color: "black" }}
          >
            쿠팡
          </Link>
        </StyledButton>
        <BlackButton>
          <Link
            to={"/companyPage/naver"}
            state={{ companyName: naver }}
            style={{ textDecoration: "none", color: "black" }}
          >
            네이버
          </Link>
        </BlackButton>
        <StyledButton>
          <Link
            to={"/companyPage/line"}
            state={{ companyName: line }}
            style={{ textDecoration: "none", color: "black" }}
          >
            라인
          </Link>
        </StyledButton>
        <BlackButton>
          <Link
            to={"/companyPage/baemin"}
            state={{ companyName: baemin }}
            style={{ textDecoration: "none", color: "black" }}
          >
            우아한 형제들
          </Link>
        </BlackButton>
      </StyledSideNav>
    </>
  );
};

export default SideNav;

//ComAround앞 동그라미
const Circle = styled.button`
  border-radius: 50%;
  background-color: #62ffa1;
  width: 20px;
  height: 20px;
  border: none;
  margin-right: 5px;
`;

//Com글씨
const ComAroundSpan = styled.span`
  color: #62ffa1;
`;

const StyledSideNav = styled.div`
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #d9d9d9;
`;

//ComAround버튼
const ComAroundButton = styled.button`
  width: 200px;
  height: 50px;
  background: black;
  color: white;
  border: none;

  font-size: 20px;
  font-weight: bold;
`;

//카카오,네이버,우아한 형제들 버튼
const BlackButton = styled.button`
  width: 200px;
  height: 50px;
  background: #707070;
  color: black;
  border: none;

  font-size: 20px;
  font-weight: bold;
  :hover {
    background-color: #62ffa1;
  }
`;

//쿠팡,배민버튼
const StyledButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: #9c9c9c;
  color: black;
  border: none;
  font-size: 20px;
  font-weight: bold;
  :hover {
    background-color: #62ffa1;
  }
`;
