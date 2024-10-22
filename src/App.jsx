import "./App.css";
import Cabecalho from "./comum/componentes/Cabecalho/Cabecalho";
import Rodape from "./comum/componentes/Rodape/Rodape";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import BotaoContador from "./paginas/BotaoContador/BotaoContador";
import PgListaTarefas from "./paginas/PgListaTarefas/PgListaTarefas";
import PaginaDesafioComponentes from "./paginas/PaginaDesafioComponentes/PaginaDesafioComponentes";

const router = createBrowserRouter([
  {
    path: "",
    element: <PaginaInicial />,
  },

  {
    path: "lista-produtos",
    element: <ListaProdutos />,
  },

  {
    path: "botao-contador",
    element: <BotaoContador />,
  },

  {
    path: "lista-tarefas",
    element: <PgListaTarefas />,
  },

  {
    path: "pagina-desafio-componentes",
    element: <PaginaDesafioComponentes />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
    </>
  );
}

export default App;
