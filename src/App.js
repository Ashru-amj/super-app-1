import { BrowserRouter, Route, Routes } from "react-router-dom";
import Registration from "./Pages/Page1/Registration";
import CategoryMain from "./Pages/Page2/CategoryMain";
import Home from "./Pages/Page3/Home";
import Browser from "./Pages/Page4/Browser";


function App() {
  return (
   <>
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Registration/>} />
      <Route path="/category" element={<CategoryMain/>} />
      <Route path="/home" element={<Home/>}/>
      <Route path="/browse" element={<Browser/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
