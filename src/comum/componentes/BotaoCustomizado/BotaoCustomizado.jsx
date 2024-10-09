import './BotaoCustomizado.css';

const BotaoCustomizado = ({cor, aoClicar, children}) => {
    const estilos = ['botao-customizado_root'];

    switch (cor){
        case 'primaria':
            estilos.push('botao-customizado_primario');
            break;

        case 'secundaria':
            estilos.push('botao-customizado_secundario');
            break;

        case 'padrao':
            estilos.push('botao-customizado_padrao');
            break;

        default:
            break;
    }
    return (
    <button className={estilos.join(" ")} onClick={aoClicar}> 
    {children}
    </button>
    );
};

export default BotaoCustomizado;