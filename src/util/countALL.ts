// companyData : 해당 회사의 전체 데이터입니다.
// category : pros1~5 | cons1~5 가 들어옵니다.

const countALL = (companyData: any[], prosType: string): number => {
  console.log("countALL의 companyData:", companyData);
  console.log("countALL의 prosType:", prosType);

  const prosTypeArr: number[] = [];
  let commuteTotalResult = 0;
  companyData.forEach((item) => {
    console.log("item-countALL:", item);
    console.log("item[prosType]", item[prosType]); //true
    if (item[prosType] === true) {
      prosTypeArr.push(item[prosType]);
    }
    console.log("prosTypeArr:", prosTypeArr);
    commuteTotalResult = prosTypeArr.length;
    console.log("배열총개수:", commuteTotalResult);
  });

  return commuteTotalResult;
};

export default countALL;
