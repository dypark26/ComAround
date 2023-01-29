import { supabase } from "../shared/supabaseClient";

export const getTable = (urlReqCompanyName: string) => {
  return supabase
    .from("SurveyData")
    .select()
    .eq("company", `${urlReqCompanyName}`);
};
