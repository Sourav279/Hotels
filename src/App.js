import Container from "./components/Container";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Container />} />
      <Route exact path="/property/:id" element={<Container />} />
    </Routes>
  );
}

export default App;
