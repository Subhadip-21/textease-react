import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar title="Text Ease" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<TextForm heading="Enter Text To Analyze:" />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
