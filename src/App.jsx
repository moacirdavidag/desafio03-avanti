import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Inserir pagina abaixo e importar */}
          {/* <Route path="/detalhefilme/:id" element={<DetalheFilme/>} /> */}
          {/* <Route path="/pesquisa/:id" element={<Pesquisa/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
