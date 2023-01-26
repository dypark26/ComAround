import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Map = () => {
  const companyLocation = [
    { lat: 33.4524641253727, lng: 126.57087301364975 },
    { lat: 37.51573384062068, lng: 127.09918343637015 },
    { lat: 37.358848483254, lng: 127.10505506241752 },
    { lat: 37.3851, lng: 127.1231 },
    { lat: 37.51689976320087, lng: 127.11271636955665 },
  ];
  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];
  console.log("urlReqCompanyName:", urlReqCompanyName);

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
  const new_script = (src: string) => {
    return new Promise((resolve: any, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.addEventListener("load", () => {
        resolve();
      });
      script.addEventListener("error", (e) => {
        reject(e);
      });
      document.head.appendChild(script);
    });
  };
  const [locationState, setLocationState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.4524641253727, lng: 126.57087301364975 },
    // 지도 위치 변경할때 panTo효과
    isPanto: false,
  });
  useEffect(() => {
    setLocationState({
      center: mapLocation,
      isPanto: false,
    });
    console.log("locationState:", locationState);
  }, [urlReqCompanyName]);
  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=52eb5d914276b85fd35eead69d3ee598"
    );
    my_script.then(() => {
      console.log("script loaded!!!");
      //@ts-ignore
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map") as HTMLElement;
        const options = {
          center: new kakao.maps.LatLng(
            locationState.center.lat,
            locationState.center.lng
          ),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);
        //마커설정
        const KakaoLocation = new kakao.maps.LatLng(
          33.4524641253727,
          126.57087301364975
        );
        const CoupangLocation = new kakao.maps.LatLng(
          37.51573384062068,
          127.09918343637015
        );
        const NaverLocation = new kakao.maps.LatLng(
          37.358848483254,
          127.10505506241752
        );
        const LineLocation = new kakao.maps.LatLng(37.3851, 127.1231);
        const BaeminLocation = new kakao.maps.LatLng(
          37.51689976320087,
          127.11271636955665
        );
        //마커표시
        const KakaoMarker = new kakao.maps.Marker({
          position: KakaoLocation,
        });
        const CoupangMarker = new kakao.maps.Marker({
          position: CoupangLocation,
        });
        const NaverMarker = new kakao.maps.Marker({
          position: NaverLocation,
        });
        const LineMarker = new kakao.maps.Marker({
          position: LineLocation,
        });
        const BaeminMarker = new kakao.maps.Marker({
          position: BaeminLocation,
        });
        KakaoMarker.setMap(map);
        CoupangMarker.setMap(map);
        NaverMarker.setMap(map);
        LineMarker.setMap(map);
        BaeminMarker.setMap(map);
      });
    });
  }, [locationState.center.lat, locationState.center.lng]);
  return (
    <>
      <MapView id="map" className="map" />
    </>
  );
};
export default Map;

const MapView = styled.div`
  height: 50vh;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border-style: solid;
  border-width: medium;
  border-color: #d8d8d8;
  z-index: -10;
`;
