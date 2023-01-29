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
    cursor: pointer;
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
