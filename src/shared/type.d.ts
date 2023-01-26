declare type SurveyData = {
  id: number;
  company: string;
  commute: number;
  convenient: number;
  restaurant: number;
  pros1: boolean;
  pros2: boolean;
  pros3: boolean;
  pros4: boolean;
  pros5: boolean;
  cons1: boolean;
  cons2: boolean;
  cons3: boolean;
  cons4: boolean;
  cons5: boolean;
};

declare type ProsConsType = {
  id: string;
  type?: string;
  content: string;
};

declare type starData = {
  name: string;
  rating: number;
};

declare type prosConsData = {
  name: string;
};

declare type listProps = {
  listType: string;
  children: string;
};

declare type locationtype = {
  lat: number;
  lng: number;
};

declare type optionsType = {
  center: kakao.maps.LatLng;
  level: number;
};
