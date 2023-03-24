import Register from "./views/Register";
import Home from "./views/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/signup" element={<Register />}/>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  );
}

export default App;
