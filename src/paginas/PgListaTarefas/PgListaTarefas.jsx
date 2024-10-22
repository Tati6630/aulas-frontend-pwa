import { useState } from "react";
import BotaoCustomizado from "../../comum/componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../comum/componentes/Principal/Principal";
import { BsTrash } from "react-icons/bs";

const PgListaTarefas = () => {
  const [descricao, setDescricao] = useState("");
  const [tarefas, setTarefas] = useState([]);

  const adicionarNaLista = () => {
    if (descricao && descricao.trim()) {
      //if(descricao) => substitui todas as condições (null, undefined, '')
      tarefas.push(descricao);
      setTarefas([...tarefas]);
      setDescricao("");
    } else {
      alert("Preencha o campo Descricao");
    }
    setDescricao("");
    document.getElementById("campoDescricao").focus();
  };

  const removerDaLista = (index) => {
    tarefas.splice(index, 1);
    setTarefas([...tarefas]);
  };

  return (
    <Principal titulo="Lista de Tarefas" voltarPara="/">
      <div>
        <input
          id="campoDescricao"
          type="text"
          placeholder="Descrição da Tarefa"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)} //
          onKeyUp={(event) => {
            if (event.key === "Enter") {
              adicionarNaLista();
            }
          }}
        />
        <BotaoCustomizado aoClicar={adicionarNaLista}>+</BotaoCustomizado>
      </div>
      <ul>
        {tarefas.map((item, index) => {
          return (
            <li key={index}>
              {item}
              <BsTrash color="purple" onClick={() => removerDaLista(index)} />
            </li>
          );
        })}
      </ul>
    </Principal>
  );
};

export default PgListaTarefas;
