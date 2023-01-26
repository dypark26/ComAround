import { useDispatch } from "react-redux";
import styled from "styled-components";
import { prosConsState } from "../redux/module/SurveySlice";

const CustomTag: React.FC<ProsConsType> = ({ id, content }) => {
  // 장단점 태그 체크 or 체크해제할 때마다 해당 태그의 체크여부 상태값 store에 업데이트 하기
  const dispatch = useDispatch();
  const handleChecked = (id: string) => {
    dispatch(prosConsState({ name: id }));
  };

  return (
    <TagWrapper>
      <input type="checkbox" onChange={() => handleChecked(id)} />
      <TagLabel>{content}</TagLabel>
    </TagWrapper>
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
  justify-content: flex-start;
  align-items: center;
  height: 32px;
  padding: 16px;
  box-shadow: 0px 0px 8px 0px #8d8d8d40;
  border-radius: 10px;
  :hover {
    cursor: pointer;
  }
`;
