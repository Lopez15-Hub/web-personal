import "./App.css";
import './imgs.css';

import Articles from "./components/views/articles";
import Inicio from "./components/views/inicio";
import AñadirArticulo from "./components/views/añadir-articulo";
import { BrowserRouter as Router, Route} from "react-router-dom";
import { Component } from "react";
import Articulo from './components/views/article';
import Contact from './components/views/contact';
import Panel from './components/views/panel';
import InicioPanel from './components/viewsAreaPanel/inicio';
class App extends Component {

  render() {
    return (
      <Router>
        <Route exact path="/" component={Inicio} />
        <Route exact path="/articles" component={Articles} />
        <Route path="/añadir" component={AñadirArticulo} />
        <Route path="/edit/:id" component={AñadirArticulo} />
        <Route exact path="/articles/:id" component={Articulo} />
        <Route exact path="/contacto" component={Contact} />
        <Route exact path="/panel" component={Panel} />
        <Route exact path="/inicio" component={InicioPanel} />
      </Router>
      
    );
  }
}

export default App;
