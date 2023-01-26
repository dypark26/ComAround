import styled from "styled-components";
import CustomTag from "./CustomTag";

const ProsConsList: React.FC<listProps> = ({ listType, children }) => {
  // 장단점 리스트
  const checkList: ProsConsType[] = [
    { id: "pros1", type: "pros", content: "🛒 다이소가 있어요" },
    { id: "pros2", type: "pros", content: "🍽️ 맛집이 많아요" },
    { id: "pros3", type: "pros", content: "🚍 교통이 편리해요" },
    { id: "pros4", type: "pros", content: "🎢 놀 곳이 많아요" },
    { id: "pros5", type: "pros", content: "🏙️ 한강이 바로 앞이에요" },
    { id: "cons1", type: "cons", content: "🚦 교통이 혼잡해요" },
    { id: "cons2", type: "cons", content: "🛒 마트가 멀어요" },
    { id: "cons3", type: "cons", content: "🍺 술집이 많아요" },
    { id: "cons4", type: "cons", content: "🏠 놀 곳이 없어요" },
    { id: "cons5", type: "cons", content: "🥣 맛집이 없어요" },
  ];

  // 장단점 리스트 내부의 type값으로 장점 단점 리스트 filtering 하고,
  // 세부항목은 하위 컴포넌트 CustomTag로 각각 maping 하기
  return (
    <>
      <ProsConsListWrapper>
        <div>{children}</div>
        {checkList
          .filter((item) => item.type === listType)
          .map((item) => {
            return (
              <CustomTag
                key={`${item.id}`}
                id={item.id}
                content={item.content}
              />
            );
          })}
      </ProsConsListWrapper>
    </>
  );
};

export default ProsConsList;

const ProsConsListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2;
  font-weight: 600;
  font-size: 20px;
  height: fit-content;
  gap: 18px;
`;
