import { useState } from "react";
import { useQuery } from "react-query";
import countAVE from "../util/countAVE";
import { getTable } from "../util/api";
import countALL from "../util/countALL";

// 총합, 평균 관련된 로직을 커스텀훅으로 뺐습니다.
// urlReqCompanyName는 회사명이 들어옵니다
// prosType과 category는 util폴더의 countALL,countAVE에 상세한 설명 달아놓았습니다.
const useCalculate = (
  urlReqCompanyName: string,
  prosType: string,
  category: string
) => {
  const [totalPros, setTotalPros] = useState(0);
  const [totalAVE, setTotalAVE] = useState(0);
  // getTable 은 api.ts에 있습니다.
  console.log("prosType", prosType);
  console.log("category", category);
  const { data, refetch } = useQuery<any>(
    ["table"],
    () => getTable(urlReqCompanyName),
    {
      onSuccess: ({ data }) => {
        setTotalPros(countALL(data, prosType));
        setTotalAVE(countAVE(data, category));
      },
    }
  );
  return { totalPros, totalAVE, refetch };
};

export default useCalculate;
