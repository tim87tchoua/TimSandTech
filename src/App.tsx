import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CourseLibrary from "./pages/CourseLibrary";
import CourseModule from "./pages/CourseModule";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<CourseLibrary />} />
        <Route path="/courses/:moduleId" element={<CourseModule />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
