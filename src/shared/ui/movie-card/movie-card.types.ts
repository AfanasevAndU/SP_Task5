/**
 * интерфейс компонента Card.
 */
export interface CardProps {
  /**
   * Задает id в DOM дереве для компонента.
   */
  id?: string;
  /**
   * Фильм
   */
  film: Film;
}

export interface Film {
  id: string;
  title: string;
  year: number;
  description: string;
  category: string[];
  rating: string;
  image: string;
  actors: {
    name: string;
    surname: string;
  };
}
