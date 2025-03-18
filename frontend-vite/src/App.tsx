import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/post/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
