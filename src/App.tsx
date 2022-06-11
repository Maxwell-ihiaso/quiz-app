import { IRoutes } from "./interfaces/Index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import routes from "./routes/Index";
import "./App.css";
import { useState } from "react";

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
