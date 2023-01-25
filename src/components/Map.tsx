import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";

type ResolveType = () => void;

const Map = () => {
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

  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경할때 panTo효과
    isPanto: false,
  });

  useEffect(() => {
    const my_script = new_script(
      "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=52eb5d914276b85fd35eead69d3ee598"
    );

    my_script.then(() => {
      console.log("script loaded!!!");
      const kakao = window["kakao"];
      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map") as HTMLElement;
        const options = {
          center: new kakao.maps.LatLng(state.center.lat, state.center.lng),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);

        //마커설정
        const 카카오마커 = new kakao.maps.LatLng(
          33.4524641253727,
          126.57087301364975
        );
        const 쿠팡마커 = new kakao.maps.LatLng(
          37.51573384062068,
          127.09918343637015
        );
        const 네이버마커 = new kakao.maps.LatLng(
          37.358848483254,
          127.10505506241752
        );
        const 라인마커 = new kakao.maps.LatLng(37.3851, 127.1231);
        const 배민마커 = new kakao.maps.LatLng(
          37.51689976320087,
          127.11271636955665
        );
        //마커표시
        const 카카오marker = new kakao.maps.Marker({
          position: 카카오마커,
        });
        const 쿠팡marker = new kakao.maps.Marker({
          position: 쿠팡마커,
        });
        const 네이버marker = new kakao.maps.Marker({
          position: 네이버마커,
        });
        const 라인marker = new kakao.maps.Marker({
          position: 라인마커,
        });
        const 배민marker = new kakao.maps.Marker({
          position: 배민마커,
        });
        카카오marker.setMap(map);
        쿠팡marker.setMap(map);
        네이버marker.setMap(map);
        라인marker.setMap(map);
        배민marker.setMap(map);
      });
    });
  }, [state.center.lat, state.center.lng]);
  return (
    <div className="App">
      <div
        id="map"
        className="map"
        style={{
          width: "100%",
          height: "600px",
          alignItems: "center",
          justifyContent: "center",
          marginLeft: "auto",

          borderStyle: "solid",
          borderWidth: "medium",
          borderColor: "#D8D8D8",
        }}
      />
      <StyledButton
        onClick={() =>
          setState({
            center: { lat: 33.45255435841544, lng: 126.57089408055378 },
            isPanto: false,
          })
        }
      >
        카카오
      </StyledButton>
      <StyledButton
        onClick={() =>
          setState({
            center: { lat: 37.51573384062068, lng: 127.09918343637015 },
            isPanto: false,
          })
        }
      >
        쿠팡
      </StyledButton>
      <StyledButton
        onClick={() =>
          setState({
            center: { lat: 37.358848483254, lng: 127.10505506241752 },
            isPanto: false,
          })
        }
      >
        네이버
      </StyledButton>
      <StyledButton
        onClick={() =>
          setState({
            center: { lat: 37.3851, lng: 127.1231 },
            isPanto: false,
          })
        }
      >
        라인
      </StyledButton>
      <StyledButton
        onClick={() =>
          setState({
            center: { lat: 37.51689976320087, lng: 127.11271636955665 },
            isPanto: false,
          })
        }
      >
        우아한 형제들
      </StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  width: 100px;
  height: 50px;
  background-color: black;
  color: white;
`;

export default Map;
