import GlobalStyle from "./components/GlobalStyles";
import Input from "./components/Input";
import Header from "./components/Header";
import Card from "./components/Card";
import { useState } from "react";


function App() {
  const [modeStatus, setModeStatus]=useState(false);
  const [info, setInfo] = useState({});

  return (
    <div className="App">
      <GlobalStyle modeStatus={modeStatus}/>
      <Header modeStatus={modeStatus} setModeStatus={setModeStatus}/>
      <Input modeStatus={modeStatus} info={info} setInfo={setInfo}/>
      <Card modeStatus={modeStatus} info={info} setInfo={setInfo}/>
    </div>
  );
}

export default App;
