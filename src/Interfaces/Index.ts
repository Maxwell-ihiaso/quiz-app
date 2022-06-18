export interface IRoutes {
  element: () => JSX.Element;
  path: string;
  props?: any;
}

export interface IRenderedPage {
  page: "homepage" | "detailspage" | "quizpage";
}

export interface IAPICategory {
  [key: string]: string[];
}

export interface IAPIMetadata {
  [key: string]: number;
}

export interface IMetadata {
  byCategory: IAPIMetadata;
  byState: IAPIMetadata;
  byDifficulty: IAPIMetadata;
  lastCreated: string;
  lastReviewed: string;
}

/**
 * IQuestions
 * ----------------
 * This is a structure of the data received from the API
 * https://the-trivia-api.com/api/questions?categories=science&limit=10
 */
export interface IQuestions {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: string;
  tags: string[];
  type: string;
  difficulty: string;
}

/**
 * Questions structure as saved in memeory
 */
export interface ILocalQuestion {
  category: string;
  id: string;
  options: string[];
  question: string;
  difficulty: string;
}
