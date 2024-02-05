import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "../styles/style.css"
// import Header from "./sections/Header";
import Home from "./pages/Home";
import Poke from "./pages/Poke";
// import Pokemon from "./pages/Pokemon";
// import GitHub from "./sections/GitHub";

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/search" element={<Poke/>}></Route>
      {/* <Route path="/pokemon/:pokemon" element={<Pokemon/>}></Route> */}
      <Route
        path="*"
        element={<Home/>}
      />
    </Routes>
    {/* <GitHub/> */}
  </BrowserRouter>
  );
}

export default App;
