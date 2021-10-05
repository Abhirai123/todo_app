import logo from './logo.svg';
import './App.css';
import Todo from './component/Todo';
import Todo2 from './component/Todo2';
import Todo3 from './component/Todo3';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Todo />
        {/* <Todo2 /> */}
        {/* <Todo3 /> */}
      </header>
    </div>
  );
}

export default App;
