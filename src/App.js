import logo from './logo.svg';
import './App.css';
import Greetin from './componentes/pure/greetin';
import Greetinf from './componentes/pure/greetinf';
import TaskListComponent from './componentes/container/task_list';
import ComponenteA from './componentes/pure/componenteA';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*<Greetin name="Martin"></Greetin>*/}
        {/*<Greetinf name="Martin"></Greetinf> Componente funcional */}
        {/*<TaskListComponent></TaskListComponent> Componente de listado de tareas */}
        <ComponenteA></ComponenteA>
      </header>
    </div>
  );
}

export default App;
