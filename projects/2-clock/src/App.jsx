import AppName from "./components/AppName";
import ClockData from "./components/ClockData";
import ClockContent from "./components/ClockContent";
import "./App.css";
function App() {
  return (
    <center className="text-containers">
      <AppName></AppName>
      <ClockData></ClockData>
      <ClockContent></ClockContent>
    </center>
  );
}

export default App;
