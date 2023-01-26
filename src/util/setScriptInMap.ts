import locationMarkerSet from "./locationMarkerSet";

const setScriptInMap = (locationState: any) => {
  // 지도 script그리는 부분
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
  // my_script가 실행되고,
  const my_script = new_script(
    "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=52eb5d914276b85fd35eead69d3ee598"
  );
  my_script.then(() => {
    console.log("script loaded!!!");
    //@ts-ignore
    const kakao = window["kakao"];
    kakao.maps.load(() => {
      const mapContainer = document.getElementById("map") as HTMLElement;
      const options: optionsType = {
        center: new kakao.maps.LatLng(
          locationState.center.lat,
          locationState.center.lng
        ),
        level: 3,
      };
      // 🌸 locationMarkerSetFuc : 마커표시 함수
      locationMarkerSet(mapContainer, options);
    });
  });
};

export default setScriptInMap;
