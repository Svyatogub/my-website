import React from "react";
import { Contackts } from "./components/Contacts/Contackts";
import { Content } from "./components/Content/Content";
import { Goals } from "./components/Goals/Goals";
import { Header } from "./components/Header/Header";
import { Skills } from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Skills />
      <Goals />
      <Contackts />
    </div>
  );
}

export default App;
