import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Child from "./Child";
import './style.css'
const App = () => {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/child" element={<Child/>} />
      </Routes>
    
   </BrowserRouter>
  )
}

export default App;