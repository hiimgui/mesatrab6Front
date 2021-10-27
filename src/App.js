import Lista from "../src/components/Lista";
import "./App.css";

function App() {
  const nomes = ["Nicolas", "Pedro", "Carolina"];
  const trazer = ["batata-frita", "pizza", "bebidas"];
  const titulos = ["Convidados", "Tarefas"];

  return (
    <div className="App">
      <Lista titulo={titulos} nome={nomes} trazer={trazer} />
    </div>
  );
}

export default App;
