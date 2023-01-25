import { Link } from "react-router-dom";

const MainPage = () => {
  const naver = "naver";
  const kakao = "kakao";

  return (
    <div>
      <h3>메인페이지</h3>

      <Link to={`companyPage/${naver}`} state={{ companyName: naver }}>
        네이버로 가기
      </Link>
      <Link to={`companyPage/${kakao}`} state={{ companyName: kakao }}>
        카카오로 가기
      </Link>
    </div>
  );
};

export default MainPage;
