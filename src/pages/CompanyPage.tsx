import { useLocation } from "react-router-dom";
import useCalculate from "../hooks/useCalculate";

const CompanyPage = () => {
  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];
  // 첫번째인자 : urlReqCompanyName (ex.네이버,카카오)
  // 두번째인자 : pros or cons
  // 세번째인자 : commute | convenient |
  const { totalPros: totalPros1, totalAVE: commuteAVE } = useCalculate(
    urlReqCompanyName,
    "pros1",
    "commute"
  );
  const { totalPros: totalPros2, totalAVE: convenientAVE } = useCalculate(
    urlReqCompanyName,
    "pros2",
    "convenient"
  );

  const { totalPros: totalPros3, totalAVE: restaurantAVE } = useCalculate(
    urlReqCompanyName,
    "pros3",
    "restaurant"
  );

  return (
    <div>
      <h3>urlRequest:{urlReqCompanyName}</h3>

      <h3>totalPros1:{totalPros1}</h3>
      <h3>totalPros2:{totalPros2}</h3>
      <h3>totalPros3:{totalPros3}</h3>
      <h3>commuteAVE:{commuteAVE}</h3>
      <h3>convenientAVE:{convenientAVE}</h3>
      <h3>restaurantAVE:{restaurantAVE}</h3>
    </div>
  );
};

export default CompanyPage;
