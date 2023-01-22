import styled from 'styled-components';

const CustomTag = ({ children }: { children: string }) => {
  return (
    <TagWrapper>
      <input type="checkbox" id="tagInput" />
      <TagLabel htmlFor="tagInput">{children}</TagLabel>
    </TagWrapper>
  );
};

export default CustomTag;

const TagWrapper = styled.div`
  height: fit-content;
  position: relative;
  input[type='checkbox'] {
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0%;
    margin: 0px;
  }
  input[type='checkbox']:checked + label {
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
