import Increment from "./components/increment-decrement/Increment.jsx";
import InputChange from "./components/change-input/InputChange.jsx";
import MultipleUseState from "./components/multiple-state/MultipleState";
import UseReducer from './components/reducer/UseReducer.jsx'

function App() {
  return (
    <div>
      <Increment />
      <InputChange />
      <MultipleUseState />
      <UseReducer/>
    </div>
  );
}

export default App;
