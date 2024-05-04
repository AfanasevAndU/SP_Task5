import { ReactNode } from "react";

/**
 * Интерфейс компонента Container.
 */
export interface ContainerProps {
  /**
   * Ориентация элементов внутри контейнера.
   */
  flexDirection: "column" | "row";
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
  /**
   * Дочерние элементы компонента.
   */
  children: ReactNode;
}
