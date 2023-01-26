import styled from "styled-components";
import { Link } from "react-router-dom";
import { companyState } from "../redux/module/SurveySlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/config/configStore";

const SideNav = () => {
  const kakao = "kakao";
  const coupang = "coupang";
  const naver = "naver";
  const line = "line";
  const baemin = "baemin";

  const dispatch = useDispatch();
  const handleCompanyUpdate = (name: string) => {
    dispatch(companyState({ name: name }));
  };

  const surveyData = useSelector((state: RootState) => state.surveyData);
  console.log("회사이름 잘들어갔어??", surveyData.company);

  return (
    <>
      <StyledSideNav>
        <StyledButton>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            ComAround
          </Link>
        </StyledButton>
        <StyledButton onClick={() => handleCompanyUpdate(kakao)}>
          <Link
            to={"/companyPage/kakao"}
            state={{ companyName: kakao }}
            style={{ textDecoration: "none" }}
          >
            카카오
          </Link>
        </StyledButton>
        <StyledButton onClick={() => handleCompanyUpdate(coupang)}>
          <Link
            to={"/companyPage/coupang"}
            state={{ companyName: coupang }}
            style={{ textDecoration: "none" }}
          >
            쿠팡
          </Link>
        </StyledButton>
        <StyledButton onClick={() => handleCompanyUpdate(naver)}>
          <Link
            to={"/companyPage/naver"}
            state={{ companyName: naver }}
            style={{ textDecoration: "none" }}
          >
            네이버
          </Link>
        </StyledButton>
        <StyledButton onClick={() => handleCompanyUpdate(line)}>
          <Link
            to={"/companyPage/line"}
            state={{ companyName: line }}
            style={{ textDecoration: "none" }}
          >
            라인
          </Link>
        </StyledButton>
        <StyledButton onClick={() => handleCompanyUpdate(baemin)}>
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
