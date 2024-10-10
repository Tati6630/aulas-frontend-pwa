import './App.css'
import Cabecalho from './comum/componentes/Cabecalho/Cabecalho'
import Rodape from './comum/componentes/Rodape/Rodape'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial/PaginaInicial';
import ListaProdutos from './paginas/ListaProdutos/ListaProdutos';

const router = createBrowserRouter([
   {
      path: '',
      element: <PaginaInicial />
   },
   {
      path: 'lista-produtos',
      element: <ListaProdutos />,
   }
]);



function App() {
   return (
   <>
   <Cabecalho />
   <RouterProvider router={router} />
   <Rodape />
   
   </>
   )
}

export default App
