import { Link } from "react-router-dom";
import "./Principal.css";
import { FaAngleLeft, FaChevronLeft } from "react-icons/fa6";

function Principal({ voltarPara, titulo, children }) {
  return (
    <main className="principal_root">
      <div className="principal_titulo">
        {voltarPara && (
          <Link to={voltarPara}>
            <FaChevronLeft size={24} color="lightblue" />{" "}     {/* esta linha de comando é para chamar um ICON, nesse caso, uma seta*/}
          </Link>
        )}

        <h1>{titulo}</h1>
      </div>
      {children}{" "}
    </main>
  );
}

export default Principal;
