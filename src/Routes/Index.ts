import { IRoutes } from "../Interfaces/Index";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import QuizDetailsPage from "../Pages/QuizDetailsPage";
import QuizPage from "../Pages/QuizPage";
import QuizResultPage from "../Pages/QuizResultPage";

/**
 * Non-Authenticated Routes
 * these routes can be accessed by all users
 */
const mainRoutes: IRoutes[] = [
  {
    path: "/",
    element: HomePage,
  },
  {
    path: "/quiz",
    element: QuizPage,
  },
  {
    path: "/quiz/:category",
    element: QuizPage,
  },
  {
    path: "/quiz/result",
    element: QuizResultPage,
  },
  {
    path: "/quiz/:category/details",
    element: QuizDetailsPage,
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
