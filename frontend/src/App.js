import "./App.css";
import Inicio from "./components/views/inicio";
import AñadirArticulo from "./components/views/añadir-articulo";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Component } from "react";
import Articulo from '../src/components/views/article';

class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/articles" component={Inicio} />
        <Route path="/añadir" component={AñadirArticulo} />
        <Route path="/edit/:id" component={AñadirArticulo} />
        <Route path="/articles/:id" component={Articulo} />
      </Router>
      
    );
  }
}

export default App;
