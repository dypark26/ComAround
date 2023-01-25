import SideNav from "../components/SideNav";
import CardSlide from "../components/CardSlide";

const MainPage = () => {
  return (
    <SideNav menuName={"ComAround"} path={"/mainpage"}>
      <CardSlide></CardSlide>
    </SideNav>
  );
};

export default MainPage;
