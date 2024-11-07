import "./App.css";
import Cabecalho from "./comum/componentes/Cabecalho/Cabecalho";
import Rodape from "./comum/componentes/Rodape/Rodape";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PaginaInicial from "./paginas/PaginaInicial/PaginaInicial";
import ListaProdutos from "./paginas/ListaProdutos/ListaProdutos";
import BotaoContador from "./paginas/BotaoContador/BotaoContador";
import PgListaTarefas from "./paginas/PgListaTarefas/PgListaTarefas";
import PaginaDesafioComponentes from "./paginas/PaginaDesafioComponentes/PaginaDesafioComponentes";
import PaginaCadastroCliente from "./paginas/PaginaCadastroCliente/PaginaCadastroCliente";
import PaginaListaClientes from "./paginas/PaginaListaClientes/PaginaListaClientes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import VerificarAutenticacao from './comum/componentes/VerificarAutenticacao/VerificarAutenticacao';
import PaginaLogin from './paginas/PaginaLogin/PaginaLogin';
import PaginaNovoUsuario from './paginas/PaginaNovoUsuario/PaginaNovoUsuario';


const router = createBrowserRouter([
  {
    path: "login",
    element: <PaginaLogin />,
  },

  {
    path: "novo-usuario",
    element: <PaginaNovoUsuario />,
  },

  {
    path: '',
    element: <VerificarAutenticacao />,
    children: [
      {
        path: '',
        element: <PaginaInicial />,
      },
      {
        path: 'lista-tarefas',
        element: <PgListaTarefas />,
      },
      {
        path: 'lista-clientes',
        element: <PaginaListaClientes />,
      },
      {
        path: 'cadastro-cliente/:id?',
        element: <PaginaCadastroCliente />,
      },
    ]
  },
  // o path do VerificarAutenticacao que tem o children termina aqui
  {
    path: "botao-contador",
    element: <BotaoContador />,
  },

  {
    path: "pagina-desafio-componentes",
    element: <PaginaDesafioComponentes />,
  },

  {
    path: "lista-produtos",
    element: <ListaProdutos />,
  },
]);

function App() {
  return (
    <>
      <Cabecalho />
      <RouterProvider router={router} />
      <Rodape />
      <ToastContainer />
    </>
  );
}

export default App;
