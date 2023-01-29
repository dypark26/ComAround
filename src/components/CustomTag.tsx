import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import useCalculate from "../hooks/useCalculate";
import { prosConsState } from "../redux/module/SurveySlice";

const CustomTag: React.FC<TagType> = ({ id, content, total, isModal }) => {
  const dispatch = useDispatch();
  const handleChecked = (id: string) => {
    dispatch(prosConsState({ name: id }));
  };

  // total이라는 이름으로 각 아이템의 id 값을 가져온다. ex: pros1, cons1...
  // 여기서 id값은 장단점 태그 이름이므로 total = 장단점 태그의 이름
  // 템플릿 리터럴을 사용해 useCalculate의 두번째 인자, 장단점이름에 가져온 total 넣어준다.
  // totalCount 라는 이름으로 계산값을 alias 한다.
  const location = useLocation();
  const urlReqCompanyName = location.state["companyName"];
  const { refetch, totalPros: totalCount } = useCalculate(
    urlReqCompanyName,
    `${total}`,
    "restaurant"
  );

  useEffect(() => {
    refetch();
  }, [urlReqCompanyName]);

  return (
    <>
      {isModal === true ? (
        <TagWrapper>
          <input type="checkbox" onChange={() => handleChecked(id)} />
          <TagLabel>{content}</TagLabel>
        </TagWrapper>
      ) : (
        <TagLabel>
          <div>{content}</div>
          <div>{totalCount}</div>
        </TagLabel>
      )}
    </>
  );
};

export default CustomTag;

const TagWrapper = styled.div`
  height: fit-content;
  position: relative;
  input[type="checkbox"] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0%;
    margin: 0px;
  }
  input[type="checkbox"]:checked + label {
    background-color: #62ffa1;
    box-shadow: none;
  }
`;

const TagLabel = styled.label`
  display: none;
  margin: 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 16px;
  box-shadow: 0px 0px 8px 0px #8d8d8d40;
  border-radius: 10px;
`;
