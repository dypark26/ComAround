const countAVE = (companyData: any, category: string): number => {
  let commuteAve: number = 0;
  const aveArray: number[] = [];
  companyData?.map((item: any) => {
    aveArray.push(item[category]);
    let commuteTotalResult: number = aveArray.reduce(
      (total: number, value: number) => (total += value),
      0
    );
    commuteAve = Number((commuteTotalResult / aveArray.length).toFixed(1));
  });
  return commuteAve;
};

export default countAVE;
