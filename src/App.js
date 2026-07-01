import React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Info from "./pages/Info";
function App() {
  // logic
  const navigate = useNavigate();

  const handleStartClick = () => {
    console.log("test" + Info.path);
    navigate("/info");
  };
  // view
  return (
    <Routes>
      <Route path="/" element={<Home onButtonClick={handleStartClick} />} />
      <Route path="/info" element={<Info />} />
      <Route path="/chat" element={<Chat />} />
    </Routes>
  );
}

export default App;
