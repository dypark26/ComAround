import SideNav from "../components/SideNav";
import Map from "../components/Map";
import styled from "styled-components";

const CompanyPage = () => {
  return (
    <CompanyPageWapper>
      <SideNav />
      <Map />
    </CompanyPageWapper>
  );
};

export default CompanyPage;

const CompanyPageWapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
`;
