import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Info from "./pages/Info";
function App() {
  // logic
  const navigate = useNavigate();

  const [ingredientList, setIngredientList] = useState([]); // 사용자가 입력할 재료 목록

  const handleStartClick = () => {
    console.log("test" + Info.path);
    navigate("/info");
  };

  // Info에서 재료 목록을 받아 저장한 후 Chat으로 이동
  const handleIngredientList = (data) => {
    console.log("Info에서 전달받은 배열:", data);

    setIngredientList(data);

    // Chat 페이지로 이동
    navigate("/chat");
  };
  // view
  return (
    <Routes>
      <Route path="/" element={<Home onButtonClick={handleStartClick} />} />
      <Route
        path="/info"
        element={
          // <Info sendIngredientList={(data) => setIngredientList(data) } />
          <Info sendIngredientList={handleIngredientList} />
        }
      />
      <Route path="/chat" element={<Chat ingredientList={ingredientList} />} />
    </Routes>
  );
}

export default App;
