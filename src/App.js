import './App.css';
import { Provider } from "react-redux";
import store from "./store";
import Events from './components/Events';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Events />
    </div>
    </Provider>
  );
}

export default App;
