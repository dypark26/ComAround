const countALL = (companyData: any[], prosType: string): number => {
  const prosTypeArr: number[] = [];
  let commuteTotalResult = 0;
  companyData.forEach((item) => {
    if (item[prosType] === true) {
      prosTypeArr.push(item[prosType]);
    }
    commuteTotalResult = prosTypeArr.length;
  });

  return commuteTotalResult;
};

export default countALL;
