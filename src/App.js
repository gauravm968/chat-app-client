import { Route, Routes } from "react-router-dom";
import Join from "./components/Join";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="">
        <Routes>
          <Route path="/" exact element={<Join />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
    </div>
  );
}

export default App;
