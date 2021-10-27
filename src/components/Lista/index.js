import Li from "../ListaDentro/index";
const Lista = ({ titulo, nome, trazer, estaNaLista }) => {
  return (
    <>
      <h3>{titulo[0]}</h3>
      <div>
        <ul>
          <Li nome={nome[0]}>esta convidado para a festa</Li>
          <Li nome={nome[1]}> nao esta convidado para a festa</Li>
          <Li nome={nome[2]}>esta convidado para a festa</Li>
        </ul>
      </div>
      <h3>{titulo[1]}</h3>
      <div>
        <ul>
          <Li nome={nome[0]} trazer={trazer[0]}>
            {" trara"}
          </Li>
          <Li nome={nome[1]} trazer={trazer[1]}>
            {" trara"}
          </Li>
          <Li nome={nome[2]} trazer={trazer[2]}>
            {" trara"}
          </Li>
        </ul>
      </div>
    </>
  );
};

export default Lista;
