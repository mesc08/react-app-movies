import React from 'react';
import { HashRouter, Route }from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Detail from "./routes/detail";
import Navbar from "./Components/nav";
function App() {
  return (
    <HashRouter>
      <Navbar /?
        <Route path="/" exact={true} component={Home} />
        <Route path="/about" component={About} />
        <Route path="/movie:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
