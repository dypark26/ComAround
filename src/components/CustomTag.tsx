import styled from 'styled-components';

const CustomTag = ({ children }: { children: string }) => {
  return (
    <TagWrapper>
      <div>{children}</div>
      {/* <label>{children}</label>
      <input type="checkbox" /> */}
    </TagWrapper>
  );
};

export default CustomTag;

const TagWrapper = styled.input`
  height: 32px;
  padding: 16px;
  box-shadow: 0px 0px 8px 0px #8d8d8d40;
  border-radius: 10px;
`;
