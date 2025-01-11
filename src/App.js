import "./App.css";
import Cards from "./components/Cards";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CharaterInfo from "./components/CharaterInfo";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/character/:id" element={<CharaterInfo />} />
      </Routes>
    </div>
  );
}

export default App;
