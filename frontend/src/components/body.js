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
      <div className="container-fluid ">
        <div className="row">
          <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12"></div>
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-4 row">
            <h1 className="display 3 text-center">ÚLTIMOS AGREGADOS</h1>

            {this.state.articles.map((articles) => (
              <div className="card-columns">
                <div className="card m-2">
                  <div className="card-img-top img" />
                  <div className="card-body">
                    <h5 className="card-title">{articles.title}</h5>
                    <p className="card-text">{articles.content}</p>
                    <p className="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p>
                  </div>
                  <Link to="/" className="btn btn-outline-primary m-2 col-4 mb-4">
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="col-md-12 col-lg-4 col-sm-12 col-xs-12">
            <h1 className="display-5 text-center">Mas vistos</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
