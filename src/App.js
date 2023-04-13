import "./App.css";
import { Header } from "./components/Header";
import { Input } from "./components/Input";

function App() {
  return (
    <>
      <Header userName="Bobo the Magnificent" />
      <main>
        <Input/>
      </main>
    </>
  );
}

export default App;
