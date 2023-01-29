import { useState } from "react";
import { useEffect } from "react";
import initialLocationSet from "../util/initialLocationSet";
import setScriptInMap from "../util/setScriptInMap";

const useMapSetting = (urlReqCompanyName: string) => {
  const [locationState, setLocationState] = useState({
    center: { lat: 33.4524641253727, lng: 126.57087301364975 },
    isPanto: false,
  });

  const { mapLocation } = initialLocationSet(urlReqCompanyName);

  useEffect(() => {
    setLocationState({
      center: mapLocation,
      isPanto: false,
    });
  }, [urlReqCompanyName]);

  useEffect(() => {
    setScriptInMap(locationState);
  }, [locationState.center.lat, locationState.center.lng]);
};

export default useMapSetting;
