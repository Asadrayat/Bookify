import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hotel } from "./pages/hotel/Hotel";
import { List } from "./pages/list/List";
import { Home } from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotels/:id" element={<Hotel />} />
        <Route path="/hotels" element={<List />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
