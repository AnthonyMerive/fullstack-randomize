import './App.css';
import { Form } from './components/Form';
import { Result } from './components/Result';

function App() {
  return (
    <div className="App container mt-5">
      <h3>Lista Random</h3>
      <p>Sistema Ramdom - Demo</p>
      <Form />
      <Result />
    </div>
  );
}

export default App;
