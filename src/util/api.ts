// import { supabase } from "../util/supabase";

import { supabase } from "../shared/supabaseClient";

// getTable : supabase의 전체데이터를 불러오는 함수입니다.
export const getTable = (urlReqCompanyName: string) => {
  console.log("getTable 실행");
  return supabase
    .from("SurveyData")
    .select()
    .eq("company", `${urlReqCompanyName}`);
  // .then((response) => {
  //   console.log("response!!!!:", response);
  // });

  // if (data) {
  //   data?.map((item: any) => {
  //     if (item.pros1 === true) {
  //       pros1Array.push(item.pros1);
  //     }
  //     console.log("pros1 이 true인 애들 (2개임)", pros1Array);
  //     console.log("naver / pros1 총 갯수는?", pros1Array.length);
  //   });
  // }
};
