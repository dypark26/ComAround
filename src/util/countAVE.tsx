import React from "react";

// companyData : 해당 회사의 전체 데이터입니다.
// category : commute | convenient | restaurant 가 들어옵니다.
// countAVE 함수 : 인자로 들어온 'category'의 평균값을 계산하는 함수입니다. 리턴값은 계산된 평균값 1개입니다.
// ⭐️ any로 타입 지정해놓은 부분은 supabase 계정 merge 후에 수정하도록 하겠습니다.
const countAVE = (companyData: any, category: string): number => {
  let commuteAve: number = 0;
  companyData?.map((item: any) => {
    console.log("countAVE의 category:", category);
    console.log("countAVE의 companyData:", companyData);

    console.log("item-countAVE:", item);
    const aveArray: number[] = [];
    console.log("item[category]:", item[category]);
    aveArray.push(item[category]);
    console.log("aveArray.length :", aveArray.length);
    let commuteTotalResult: number = aveArray.reduce(
      (total: number, value: number) => (total += value),
      0
    );
    console.log("commuteTotalResult는 commute의 총합", commuteTotalResult);
    commuteAve = commuteTotalResult / aveArray.length;
    console.log("commuteAve(평균값):", commuteAve);
  });
  return commuteAve;
};

export default countAVE;
