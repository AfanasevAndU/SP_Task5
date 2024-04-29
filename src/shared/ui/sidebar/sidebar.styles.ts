import styled from "styled-components";

export const SidebarContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100%;
  background-color: #f4f4f4;
  padding: 20px;
  overflow-y: auto; /* Включить вертикальную прокрутку, если контент слишком высокий */
  border-left: 1px solid #ddd; /* Добавить левую границу для отделения от основного контента */
`;
