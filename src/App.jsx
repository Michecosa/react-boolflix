import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import SerieTv from "./pages/SerieTv";
import Film from "./pages/Film";
import Originali from "./pages/Originali";
import AggiuntiDiRecente from "./pages/AggiuntiDiRecente";
import LaMiaLista from "./pages/LaMiaLista";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/SerieTv" element={<SerieTv />} />
            <Route path="/Film" element={<Film />} />
            <Route path="/Originali" element={<Originali />} />
            <Route path="/AggiuntiDiRecente" element={<AggiuntiDiRecente />} />
            <Route path="/LaMiaLista" element={<LaMiaLista />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
