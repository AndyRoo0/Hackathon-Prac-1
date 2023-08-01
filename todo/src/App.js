import './Components/Input';
import Input from './Components/Input';
import Tasklist from './Components/Tasklist';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <>
          <h1>My list</h1>
          <h2>Click an item to check it off</h2>
          <Input />
          <Tasklist />
        </>
      </header>
    </div>
  );
}

export default App;
