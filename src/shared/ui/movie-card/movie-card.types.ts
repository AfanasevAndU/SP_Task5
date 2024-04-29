import { Movie } from "../../../store/movieSlice";

/**
 * интерфейс компонента Card.
 */
export interface CardProps {
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: number;
  /**
   * Фильм
   */
  movie: Movie;
  /**
   *
   */
  children?: React.ReactElement;
}
