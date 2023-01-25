// companyData : 해당 회사의 전체 데이터입니다.
// category : pros1~5 | cons1~5 가 들어옵니다.
// countALL 함수 : 인자로 들어온 'prosType'의 총합산을 하는 함수입니다. 리턴값은 계산된 합계값 1개입니다.
// ⭐️ any로 타입 지정해놓은 부분은 supabase 계정 merge 후에 수정하도록 하겠습니다.
const countALL = (companyData: any[], prosType: string): number => {
  const prosTypeArr: number[] = [];
  companyData.forEach((item) => {
    // +item[prosType] : 해당 prosType의 value를 뽑아오면서 '+'를 통해 Number타입으로 형변환됩니다.
    // ⭐️ 추후 데이터는 1,0이 아닌 true,false로 들어가게 되며 이 식은 1,0일때의 계산식입니다.
    // ⭐️ 추후 아래 23번 라인 주석으로 처리된 다영님 코드로 변경될 예정입니다.
    prosTypeArr.push(+item[prosType]);
  });
  let commuteTotalResult: number = prosTypeArr.reduce(
    (total: number, value: number) => (total += value),
    0
  );
  return commuteTotalResult;
};

export default countALL;

// ⭐️ 추후 해당 코드로 계산 로직이 변경될 예정입니다 ⭐️
// if (data) {
//   data?.map((item: any) => {
//     if (item.pros1 === true) {
//       pros1Array.push(item.pros1);
//     }
//     console.log("pros1 이 true인 애들 (2개임)", pros1Array);
//     console.log("naver / pros1 총 갯수는?", pros1Array.length);
//   });
// }
