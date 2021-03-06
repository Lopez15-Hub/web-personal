import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Body extends Component {
  state = {
    articles: [],
    title: " ",
    subtitle: " ",
    content: " ",
  };
  getArticles = async () => {
    const res = await axios.get("http://localhost:4000/api/articles");
    this.setState({ articles: res.data });
    console.log(res);
 
  };
  getArticle = async (id) => {
  
    const res = await axios.get("http://localhost:4000/api/articles/" + id);
    this.setState({title:res.data.title});
    this.setState({ subtitle: res.data.subtitle });
    this.setState({content:res.data.content});
    this.setState({article:res.data});
    console.log(res);
  };
  
  async componentDidMount() {
    this.getArticles();
    this.getArticle();
    console.log(this.state.articles);
  }


  getArticle = async (id) => {
    const res = await axios.get("http://localhost:4000/api/articles/find" + id);
    this.setState({title:res.data.title});
    this.setState({ subtitle: res.data.subtitle });
    this.setState({content:res.data.content});
    this.setState({article:res.data});
    console.log(res);
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-2 shadow bg-light">
            <h1 className="display 5">Menu</h1>
            <ul className="border">
              <li>Inicio</li>
              <li>Articulos</li>
              <li>Contacto</li>
              <li>Libros</li>
            </ul>
          </div>
          <div className="col-8 row">
            <h1 className="display 3 text-center">ÚLTIMOS AGREGADOS</h1>
          
            {this.state.articles.map((articles) => (
              <div
                className="shadow m-5 row card col-3"
                key={articles._id}
              >
                
                <div className="image card-image-top">
                  <div className="img"></div>
                </div>
                <hr />
                <header>
                  <h4 className=" mt-2 text-center">{articles.title}</h4>

                  <p className="lead justify ">{articles.subtitle}</p>
               
                </header>

                <div className="form-group row m-2">
                  <div className="col-8"></div>
                  <Link
                    to={"/articles/" + articles._id}
                    onClick={() => this.getArticle(articles._id)}
                    className="btn btn-outline-primary btn-block col-4"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
            
          </div>
          <div className="col-2 m-2  bg-light">
          <h1 className="display-5">Mas vistos:</h1>
          </div>
        </div>
         
      </div>
    );
  }
}

export default Body;
