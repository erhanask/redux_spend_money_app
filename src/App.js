import './App.css';
import {Header} from "./components/Header";
import {List} from "./components/List";
import {Receipt} from "./components/Receipt";

function App() {
  return (
    <div className="App">
      <Header/>
      <List/>
      <Receipt/>
    </div>
  );
}

export default App;
