import { useState } from "react";
import { useQuery } from "react-query";
import countAVE from "../util/countAVE";
import { getTable } from "../util/api";
import countALL from "../util/countALL";

const useCalculate = (
  urlReqCompanyName: string,
  prosType: string,
  category: string
) => {
  const [totalPros, setTotalPros] = useState(0);
  const [totalAVE, setTotalAVE] = useState(0);
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
