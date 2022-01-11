import './App.css';
import { Form } from './components/Form';
import { List } from './components/List';
import { Result } from './components/Result';

function App() {
  return (
    <div className="App container mt-5">
      <h3>Lista Random</h3>
      <p>Sistema Ramdom - Demo</p>
      <div className="container">
        <div className="row">
          <div className="col">
            <Form />
          </div>
          <div className="col">
            <Result />
          </div>
        </div>
      </div>
      <List />
    </div>
  );
}

export default App;
