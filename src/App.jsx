import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Marriage from "./pages/Marriage";
import Divorce from "./pages/Divorce";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />
      <main className="flex-grow-1 container py-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/marriage" element={<Marriage />} />
          <Route path="/divorce" element={<Divorce />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
