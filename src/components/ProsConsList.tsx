import styled from "styled-components";
import CustomTag from "./CustomTag";

const ProsConsList: React.FC<listProps> = ({ isModal, listType, children }) => {
  const checkList: ProsConsType[] = [
    { id: "pros1", type: "pros", content: "π λ€μ΄μκ° μμ΄μ" },
    { id: "pros2", type: "pros", content: "π½οΈ λ§μ§μ΄ λ§μμ" },
    { id: "pros3", type: "pros", content: "π κ΅ν΅μ΄ νΈλ¦¬ν΄μ" },
    { id: "pros4", type: "pros", content: "π’ λ κ³³μ΄ λ§μμ" },
    { id: "pros5", type: "pros", content: "ποΈ νκ°μ΄ λ°λ‘ μμ΄μμ" },
    { id: "cons1", type: "cons", content: "π¦ κ΅ν΅μ΄ νΌμ‘ν΄μ" },
    { id: "cons2", type: "cons", content: "π λ§νΈκ° λ©μ΄μ" },
    { id: "cons3", type: "cons", content: "πΊ μ μ§μ΄ λ§μμ" },
    { id: "cons4", type: "cons", content: "π  λ κ³³μ΄ μμ΄μ" },
    { id: "cons5", type: "cons", content: "π₯£ λ§μ§μ΄ μμ΄μ" },
  ];

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
                total={`${item.id}`}
                isModal={isModal}
              ></CustomTag>
            );
          })}
      </ProsConsListWrapper>
    </>
  );
};

export default ProsConsList;

const ProsConsListWrapper = styled.div`
  display: flex;
  min-width: 240px;
  flex-direction: column;
  flex: 2;
  font-weight: 600;
  font-size: 20px;
  height: fit-content;
  gap: 18px;
`;
