import './PaginaListaClientes.css';
import { Link, useNavigate } from 'react-router-dom';
import Principal from '../../comum/componentes/Principal/Principal';
import ServicoCliente from '../../comum/servicos/ServicoCliente';
import { useEffect, useState } from 'react';
import { FaEdit } from 'react-icons/fa';

const instanciaServicoCliente = new ServicoCliente();

const PaginaListaClientes = () => {
    const navigate = useNavigate();
    const [listaClientes, setListaClientes] = useState([]);

    useEffect(() => {
        const clientesDoLocalStorage = instanciaServicoCliente.listar();
        setListaClientes(clientesDoLocalStorage);
    }, []);

    const navegarparaEdicao = (idCliente) => {
        navigate(`/cadastro-cliente/${idCliente}`);
    };


    return (
        <Principal titulo="Lista de Clientes" voltarPara="/">
            <Link to="/cadastro-cliente">Novo</Link>

            {listaClientes.map((cliente) => {
                return (
                    <div
                    key={cliente.id}
                    className='pagina-lista-clientes__item-cliente'
                    >

                    {cliente.nome}

                    <FaEdit 
                    size={24} 
                    onClick={() => navegarparaEdicao(cliente.id)} 
                    />
                    </div>
                );
            })
            }
        </Principal>
    );
};

export default PaginaListaClientes;