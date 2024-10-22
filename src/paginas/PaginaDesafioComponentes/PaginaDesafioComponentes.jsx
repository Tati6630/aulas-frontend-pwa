import Principal from "../../comum/componentes/Principal/Principal";
import MostrarDivisao from "./MostrarDivisão/MostrarDivisao";
import MostrarMultiplicacao from "./MostrarMultiplicacao/MostrarMultiplicacao";
import MostrarNumerosPares from "./MostrarNumerosPares/MostrarNumerosPares";
import MostrarSoma from "./MostrarSoma/MostrarSoma";
import MostrarSubtracao from "./MostrarSubtracao/MostrarSubtracao";

const PaginaDesafioComponentes = () => {
  return (
    <Principal>
      <MostrarSoma num1={2007} num2={1978} />
      <MostrarDivisao num1={500} num2={50} />
      <MostrarMultiplicacao num1={6} num2={6} />
      <MostrarSubtracao num1={2007} num2={1978} />
      <MostrarNumerosPares
        numeros={[1, 8, 13, 16, 21, 24, 29, 32, 37, 40, 45, 48]}
      />
    </Principal>
  );
};
export default PaginaDesafioComponentes;
