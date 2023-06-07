import { useState } from "react";
import Header from "./components/header";
import Card from "./components/card";
import Form from "./components/form";
import {data} from "./data/data"

function App() {
const [kurss, setKurs] = useState(data)

const yeniKurs= (yeni) => {
  setKurs(prev => [...prev,yeni])
}
  return (
  <div >
    <Header/>
    <Form yeniKurs={yeniKurs}/>
    <Card data={kurss}/>
  </div>
  );
}

export default App;
