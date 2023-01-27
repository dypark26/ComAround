import { useState } from "react";
import { useEffect } from "react";
import initialLocationSet from "../util/initialLocationSet";
import setScriptInMap from "../util/setScriptInMap";

const useMapSetting = (urlReqCompanyName: string) => {
  const [locationState, setLocationState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.4524641253727, lng: 126.57087301364975 },
    // 지도 위치 변경할때 panTo효과
    isPanto: false,
  });

  // 🌸 initialLocationSet : 회사명에 따라 최초 Location 셋팅
  const { mapLocation } = initialLocationSet(urlReqCompanyName);

  // 지도 x,y 좌표 세팅해주는 부분
  useEffect(() => {
    setLocationState({
      center: mapLocation,
      isPanto: false,
    });
  }, [urlReqCompanyName]);

  useEffect(() => {
    // 🌸 setScriptInMap : script로 돔 조작하는 함수
    setScriptInMap(locationState);
  }, [locationState.center.lat, locationState.center.lng]);
};

export default useMapSetting;
