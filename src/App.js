
import './App.css';
import TimerWrapper from './Timer/TimerWrapper';
import Parent from './Context/Parent'
import Form from "./Validations/UserForm"
function App() {
  const onExpire = () => {
     console.log("Expire")
  }
 
  return (
    <div className="App">
      {/* <TimerWrapper onExpire={onExpire} duration={10 * 1000} />
      <Parent /> */}
<Form />
    </div>
  );
}

export default App;
