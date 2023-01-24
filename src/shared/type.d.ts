declare type ProsConsProps = {
  children: string;
  section: string;
};

declare type ProsConsType = {
  id: number;
  content: string;
};

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

declare type commuteData = {
  commute: number;
};

declare type convenientData = {
  convenient: number;
};

declare type restaurantData = {
  restaurant: number;
};

declare type starData = {
  name: string;
  value: number;
};
