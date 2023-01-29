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
  type: string;
  content: string;
};

declare type TagType = {
  id: string;
  content: string;
  total: string;
  isModal?: boolean;
};

declare type starData = {
  name: string;
  rating: number;
};

declare type companyData = {
  name: string;
};

declare type prosConsData = {
  name: string;
};

declare type listProps = {
  isModal?: boolean;
  listType: string;
  children?: string;
};

declare type locationtype = {
  lat: number;
  lng: number;
};

declare type optionsType = {
  center: kakao.maps.LatLng;
  level: number;
};

declare type urlArrayType = {
  [key: string]: string;
};
