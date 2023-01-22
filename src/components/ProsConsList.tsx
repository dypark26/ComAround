import styled from 'styled-components';

const ProsConsList = ({ children, section }: ProsConsProps) => {
  const prosList: string[] = [
    '🛒 다이소가 있어요',
    '🍽️ 맛집이 많아요',
    '🚍 교통이 편리해요',
    '🎢 놀 곳이 많아요',
    '🏙️ 한강이 바로 앞이에요',
  ];
  const consList: string[] = [
    '🚦 교통이 혼잡해요',
    '🛒 마트가 멀어요',
    '🍺 술집이 많아요',
    '🏠 놀 곳이 없어요',
    '🥣 맛집이 없어요',
  ];

  return (
    <ProsConsListWrapper>
      <div>{children}</div>
      {section === 'pros'
        ? prosList.map((pros: string) => <CustomTag>{pros}</CustomTag>)
        : consList.map((cons: string) => <CustomTag>{cons}</CustomTag>)}
    </ProsConsListWrapper>
  );
};

export default ProsConsList;

const ProsConsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  /* background-color: ghostwhite; */
  font-weight: 600;
  font-size: 20px;
  height: fit-content;
  gap: 18px;
`;

const CustomTag = styled.div`
  height: 32px;
  padding: 16px;
  box-shadow: 0px 0px 8px 0px #8d8d8d40;
  border-radius: 10px;
`;
