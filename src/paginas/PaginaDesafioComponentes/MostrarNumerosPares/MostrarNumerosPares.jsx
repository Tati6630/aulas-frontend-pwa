const MostrarNumerosPares = ({ numeros }) => {
  return (
    <ul>
      {numeros.map((numero) => {
        if (numero % 2 == 0) return <li>{numero}</li>;
      })}
    </ul>
  );
};
export default MostrarNumerosPares;
