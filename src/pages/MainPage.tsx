import React, { useCallback, useState } from "react";
import Sidebar from "../components/SideNav/Sidebar";
import styled from "styled-components";
import CardSlide from "../components/CardSlide";
const MainPage = () => {
  const [isOpenModal, setOpenModal] = useState<boolean>(false);

  const onClickToggleModal = useCallback(() => {
    setOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return (
    <Sidebar>
      <Main>
        {isOpenModal && (
          <CardSlide onClickToggleModal={onClickToggleModal}></CardSlide>
        )}
        <DialogButton onClick={onClickToggleModal}>Open Modal</DialogButton>
      </Main>
    </Sidebar>
  );
};

const Main = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const DialogButton = styled.button`
  width: 160px;
  height: 48px;
  background-color: blueviolet;
  color: white;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    transform: translateY(-1px);
  }
`;

export default MainPage;
