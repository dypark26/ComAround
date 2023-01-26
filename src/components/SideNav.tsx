import styled from "styled-components";
import { Link } from "react-router-dom";

const SideNav = () => {
  const kakao = "kakao";
  const coupang = "coupang";
  const naver = "naver";
  const line = "line";
  const baemin = "baemin";

  return (
    <>
      <StyledSideNav>
        <StyledButton>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            ComAround
          </Link>
        </StyledButton>
        <StyledButton>
          <Link
            to={"/companyPage/kakao"}
            state={{ companyName: kakao }}
            style={{ textDecoration: "none" }}
          >
            카카오
          </Link>
        </StyledButton>
        <StyledButton>
          <Link
            to={"/companyPage/coupang"}
            state={{ companyName: coupang }}
            style={{ textDecoration: "none" }}
          >
            쿠팡
          </Link>
        </StyledButton>
        <StyledButton>
          <Link
            to={"/companyPage/naver"}
            state={{ companyName: naver }}
            style={{ textDecoration: "none" }}
          >
            네이버
          </Link>
        </StyledButton>
        <StyledButton>
          <Link
            to={"/companyPage/line"}
            state={{ companyName: line }}
            style={{ textDecoration: "none" }}
          >
            라인
          </Link>
        </StyledButton>
        <StyledButton>
          <Link
            to={"/companyPage/baemin"}
            state={{ companyName: baemin }}
            style={{ textDecoration: "none" }}
          >
            우아한 형제들
          </Link>
        </StyledButton>
      </StyledSideNav>
    </>
  );
};

export default SideNav;

const StyledSideNav = styled.div`
  width: 300px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: red;
`;

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  margin: 10px;
  font-size: 20px;
  font-weight: bold;
`;
