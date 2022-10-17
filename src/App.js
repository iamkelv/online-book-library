import { Route, Routes } from "react-router-dom";
import { Auth } from "./pages/Auth";
import { Home } from "./pages/Home";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="*" element={<h1>404 Page Not found </h1>} />
      </Routes>
    </div>
  );
}

export default App;
