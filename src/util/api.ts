import { supabase } from "../shared/supabaseClient";

// getTable : supabase의 전체데이터를 불러오는 함수입니다.
export const getTable = (urlReqCompanyName: string) => {
  console.log("getTable 실행");
  return supabase
    .from("SurveyData")
    .select()
    .eq("company", `${urlReqCompanyName}`);
};
