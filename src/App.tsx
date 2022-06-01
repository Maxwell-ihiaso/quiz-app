import { IRoutes } from "./Interfaces/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./Routes/Index";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {routes.map((route: IRoutes, i: number) => (
          <Route
            key={i}
            path={route.path}
            element={<route.element {...route.props} />}
          />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
