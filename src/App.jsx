import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Detail } from "./pages/Details/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Inserir pagina abaixo e importar */}
          <Route path="/details/:id" element={<Detail/>} />
          {/* <Route path="/pesquisa/:id" element={<Pesquisa/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
