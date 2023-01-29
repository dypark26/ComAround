const locationMarkerSet = (mapContainer: HTMLElement, options: optionsType) => {
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
};

export default locationMarkerSet;
