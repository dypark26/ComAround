import React from "react";
import { useEffect } from "react";

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
          center: new kakao.maps.LatLng(33.4524641253727, 126.57087301364975),
          level: 3,
        };
        const map = new kakao.maps.Map(mapContainer, options);
        //마커설정
        const markerPosition = new kakao.maps.LatLng(
          33.4524641253727,
          126.57087301364975
        );
        const marker = new kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    });
  }, []);
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
    </div>
  );
};

export default Map;
