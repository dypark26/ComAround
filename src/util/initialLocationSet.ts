// 🌸 들어오는 회사명에 따라 초기 location 셋팅해주는 함수
const initialLocationSet = (urlReqCompanyName: string) => {
  console.log("initialLocationSet가 실행되었습니다");
  const companyLocation = [
    { lat: 33.4524641253727, lng: 126.57087301364975 },
    { lat: 37.51573384062068, lng: 127.09918343637015 },
    { lat: 37.358848483254, lng: 127.10505506241752 },
    { lat: 37.3851, lng: 127.1231 },
    { lat: 37.51689976320087, lng: 127.11271636955665 },
  ];

  const mapLocation: locationtype =
    urlReqCompanyName === "kakao"
      ? companyLocation[0]
      : urlReqCompanyName === "coupang"
      ? companyLocation[1]
      : urlReqCompanyName === "naver"
      ? companyLocation[2]
      : urlReqCompanyName === "line"
      ? companyLocation[3]
      : companyLocation[4];

  console.log("mapLocation", mapLocation);
  return { mapLocation };
};

export default initialLocationSet;
