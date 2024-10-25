const MostrarProduto = ({ produto }) => {

    return (
        <ul>
           <li><strong>Nome: </strong>{produto.nome}</li>
           <li><strong>Preço: </strong>R$ {produto.preco}0</li>
           <li><strong>Estoque:</strong> {produto.estoque}</li>

        </ul>
    );
};
export default MostrarProduto;