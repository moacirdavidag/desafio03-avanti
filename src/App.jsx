import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { Details } from "./pages/Details";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Inserir pagina abaixo e importar */}
          <Route path="/detalhes/:id" element={<Details />} />
          <Route path="/favorites" element={<Favorites />} />
          {/* <Route path="/pesquisa/:id" element={<Pesquisa/>} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
