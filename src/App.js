import { createContext, useState } from 'react';
import './App.css';
import Content from './components/content/Content';
import Header from './components/Header/Header';

export const CounterContext = createContext();
function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className='App'>
      <CounterContext.Provider value={[counter, setCounter]}>
        <Header></Header>
        <Content></Content>
      </CounterContext.Provider>
    </div>
  );
}

export default App;
