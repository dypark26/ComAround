import locationMarkerSet from "./locationMarkerSet";

const setScriptInMap = (locationState: any) => {
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
  const my_script = new_script(
    "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=52eb5d914276b85fd35eead69d3ee598"
  );
  my_script.then(() => {
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
      locationMarkerSet(mapContainer, options);
    });
  });
};

export default setScriptInMap;
