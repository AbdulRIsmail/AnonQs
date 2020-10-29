import React from "react";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/app.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
