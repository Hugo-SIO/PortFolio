import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Accueil from "./Pages/Accueil";
import Projets from "./Pages/Projets";
import Footer from "./Components/Footer";
import NotFound from "./Pages/NotFound"; // importe ta page 404

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/projets" element={<Projets />} />

        {/* Route 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
