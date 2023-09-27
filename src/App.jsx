import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Detalhes } from "./pages/Detalhes/Detalhes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Inserir pagina abaixo e importar */}
          <Route path="/detalhes/:id" element={<Detalhes/>} />
          {/* <Route path="/pesquisa/:id" element={<Pesquisa/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
