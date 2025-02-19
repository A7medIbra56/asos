import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layouts";

export default function AppRouter() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
        </Route>
      </Routes>
    </Router>
  );
}
