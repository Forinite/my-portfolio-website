import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./src/components/pages/HomePage.jsx";
import ProjectPage from "./src/components/pages/ProjectPage.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
