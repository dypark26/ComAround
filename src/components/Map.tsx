import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useMapSetting from "../hooks/useMapSetting";

const Map = () => {
  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];
  // 🌸 useMapSetting : 지도관련 함수 커스텀훅으로 작성
  useMapSetting(urlReqCompanyName);

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
  border: none;
  z-index: 0;
  @media (max-width: 1000px) {
    height: 20vh;
    width: 100%;
  }
`;
