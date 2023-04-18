
import { Route, Routes } from "react-router-dom";
import Cart from "./Components/Cart";
import Home from "./Components/Home";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="/cart" element={<Cart/>}></Route>

      </Routes>
   

    </div>
  );
}

export default App;
