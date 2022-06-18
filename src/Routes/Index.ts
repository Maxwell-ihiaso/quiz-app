import { IRoutes } from "../interfaces/Index";
import ErrorPage from "../pages/ErrorPage";
import HomePage from "../pages/HomePage";
import QuizDetailsPage from "../pages/QuizDetailsPage";
import QuizPage from "../pages/QuizPage";
import QuizResultPage from "../pages/QuizResultPage";

/**
 * Non-Authenticated Routes
 * these routes can be accessed by all users
 */
const mainRoutes: IRoutes[] = [
  {
    path: "/",
    element: HomePage,
    props: { page: "homepage" },
  },
  // {
  //   path: "/quiz",
  //   element: QuizPage,
  // },
  {
    path: "/quiz/:category",
    element: QuizPage,
    props: { page: "quizpage" },
  },
  {
    path: "/quiz/result",
    element: QuizResultPage,
  },
  {
    path: "/quiz/:category/details",
    element: QuizDetailsPage,
    props: { page: "detailspage" },
  },
];

/**
 * Authentication Route
 * will be activated once authentication is considered
 */
const authRoutes: IRoutes[] = [];

/**
 * Error Routes
 * route to manage NotFound url
 */
const errorRoutes: IRoutes[] = [
  {
    path: "*",
    element: ErrorPage,
  },
];

const routes: IRoutes[] = [...mainRoutes, ...authRoutes, ...errorRoutes];

export default routes;
