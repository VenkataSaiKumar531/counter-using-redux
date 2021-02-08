
import './App.css';
import { createStore } from 'redux';
import Counter from './Components/Counter';
import Reducer from './Reducers/Reducer';
import { Provider } from "react-redux";
const store= createStore(Reducer);

function App() {
  return (
    <div className="App">
      <Provider store={store}>
      <h1> This is Counter Applicatins using Redux</h1>
      <Counter/>

      </Provider>
      
    </div>
  );
}

export default App;
