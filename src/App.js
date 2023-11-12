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
      <Route path="/super-app-1/" element={<Registration/>} />
      <Route path="/super-app-1/category" element={<CategoryMain/>} />
      <Route path="/super-app-1/home" element={<Home/>}/>
      <Route path="/super-app-1/browse" element={<Browser/>}/>
    </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
