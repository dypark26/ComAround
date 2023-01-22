import styled from 'styled-components';
import CustomTag from './CustomTag';

const ProsConsList = ({ children, section }: ProsConsProps) => {
  const prosList: ProsConsType[] = [
    { id: 1, content: '🛒 다이소가 있어요' },
    { id: 2, content: '🍽️ 맛집이 많아요' },
    { id: 3, content: '🚍 교통이 편리해요' },
    { id: 4, content: '🎢 놀 곳이 많아요' },
    { id: 5, content: '🏙️ 한강이 바로 앞이에요' },
  ];
  const consList: ProsConsType[] = [
    { id: 6, content: '🚦 교통이 혼잡해요' },
    { id: 7, content: '🛒 마트가 멀어요' },
    { id: 8, content: '🍺 술집이 많아요' },
    { id: 9, content: '🏠 놀 곳이 없어요' },
    { id: 10, content: '🥣 맛집이 없어요' },
  ];

  return (
    <ProsConsListWrapper>
      <div>{children}</div>
      {section === 'pros'
        ? prosList.map(({ id, content }) => (
            <CustomTag key={id}>{content}</CustomTag>
          ))
        : consList.map(({ id, content }) => (
            <CustomTag key={id}>{content}</CustomTag>
          ))}
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
