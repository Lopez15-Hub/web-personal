import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class Body extends Component {
  state = {
    articles: [],
    title: " ",
    subtitle: " ",
    content: " ",
    urlArticle: "",
  };
  getArticles = async () => {
    const res = await axios.get("http://localhost:4000/api/articles");
    this.setState({ articles: res.data });
    console.log(res);
  };

  async componentDidMount() {
    this.getArticles();

    console.log(this.state.articles);
  }

  render() {
    return (
      <div className="container-fluid  ">
        <div className="row">
          <h1 className="display-3 text-center">ÚLTIMOS AGREGADOS</h1>
          <hr />
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-10 row">
            {this.state.articles.map((articles) => (
              <div className="card-deck col-4" key={articles._id}>
                <div className="card ">
                  <div className="card-img-top img" />
                  <div className="card-body">
                    <h5 className="card-title">{articles.title}</h5>
                    <p className="card-text">{articles.content.slice(0,150)  + "..."}</p>
                    <p className="card-text">
                      <small className="text-muted">
                      Subido el: {articles.createdAt.slice(0,10)}
                      </small>
                    </p>
                  </div>
                  <Link
                    to={"/articles/"+articles.urlArticle}
                    className="btn btn-outline-primary m-2 col-4 mb-4"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 col-lg-2 col-sm-12 col-xs-12">
            <h1 className="display-5 text-center">Mas vistos</h1>
            {this.state.articles.map((articles) => (
              <li className="list-group " key={articles._id}>
                <Link
                  to={articles.urlArticle}
                  className="list-item a text-dark under text-center"
                >
                  {articles.title}
                
                </Link>
                <hr />
              </li>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
