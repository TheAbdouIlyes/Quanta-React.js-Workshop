import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";

import { useEffect } from "react";

import TestingEffect from "./TestingEffect";


function App() {

 
useEffect(() => {
  console.log("Component mounted");
}, []);


  return (
    <>
      {/* <div>fixed</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter> */}
      <TestingEffect />
    </>
  );
}

export default App;
