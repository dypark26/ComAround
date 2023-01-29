import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {
  const location = useLocation();
  const urlReqCompanyName =
    location.state === null ? "" : location.state["companyName"];

  return (
    <>
      <StyledSideNav>
        <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
          <ComAroundButton>
            <img src="/assets/logo.png" alt="ComAround" width={19} />
            <ComAroundSpan>Com</ComAroundSpan>Around
          </ComAroundButton>
        </Link>
        <Link
          to={"/companyPage/kakao"}
          state={{ companyName: "kakao" }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BlackButton location={urlReqCompanyName} name={"kakao"}>
            카카오
          </BlackButton>
        </Link>
        <Link
          to={"/companyPage/coupang"}
          state={{ companyName: "coupang" }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BlackButton location={urlReqCompanyName} name={"coupang"}>
            쿠팡
          </BlackButton>
        </Link>
        <Link
          to={"/companyPage/naver"}
          state={{ companyName: "naver" }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BlackButton location={urlReqCompanyName} name={"naver"}>
            네이버
          </BlackButton>
        </Link>
        <Link
          to={"/companyPage/line"}
          state={{ companyName: "line" }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BlackButton location={urlReqCompanyName} name={"line"}>
            라인
          </BlackButton>
        </Link>
        <Link
          to={"/companyPage/baemin"}
          state={{ companyName: "baemin" }}
          style={{ textDecoration: "none", color: "black" }}
        >
          <BlackButton location={urlReqCompanyName} name={"baemin"}>
            우아한 형제들
          </BlackButton>
        </Link>
      </StyledSideNav>
    </>
  );
};

export default SideNav;

const StyledSideNav = styled.div`
  width: 200px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2f3338;
`;

//Com글씨
const ComAroundSpan = styled.span`
  color: #62ffa1;
`;

//ComAround버튼
const ComAroundButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 56px;
  background-color: #2f3338;
  color: white;
  border: none;
  font-size: 24px;
  font-weight: 600;
  > img {
    margin-right: 6px;
  }
`;

//사이드바 버튼
const BlackButton = styled.button<{ location: any }>`
  width: 200px;
  height: 56px;
  color: #f4f6f8;
  color: ${(props) => (props.location === props.name ? "black" : "#f4f6f8;")};
  border: none;
  cursor: pointer;
  font-size: 20px;
  font-weight: ${(props) => (props.location === props.name ? 700 : 400)};
  background-color: ${(props) =>
    props.location === props.name ? "#62ffa1" : "#2f3338"};
  :hover {
    font-weight: 700;
    color: #f4f6f8;
    background-color: #191b1f;
  }
`;
