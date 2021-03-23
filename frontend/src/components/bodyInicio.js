import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class BodyInicio extends Component {
  state = {
    articles: [],
    title: " ",
    subtitle: " ",
    content: " ",
    urlArticle: "",
    click: " "
  };
  getArticles = async () => {
    const res = await axios.get("http://localhost:5000/api/articles");
    this.setState({ articles: res.data });
  };

  async componentDidMount() {
    this.getArticles();



  };



  render() {
    return (
      <div className="container-fluid  ">
        <div className="row">
          <h1 className="display-3 text-center">INICIO</h1>
          <hr />
          <div className="col-md-12 col-sm-12 col-xs-12 col-lg-10 row">
            {this.state.articles.map((articles) => (
              <div className="card-deck col-4" key={articles._id}>
                <div className="card ">
                  <div className="card-img-top img" />
                  <div className="card-body">
                    <h5 className="card-title">{articles.title}</h5>
                    <p className="card-text">
                      {articles.content.slice(0, 150) + "..."}
                    </p>
                    <p className="card-text">
                      <small className="text-muted">
                        Subido el: {articles.createdAt.slice(0, 10)}
                      </small>
                    </p>
                  </div>
                  <Link
                  
                    to={"/articles/" + articles._id}
                    className="btn btn-outline-primary m-2 col-4 mb-4"
                  >
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
         
        </div>
      </div>
    );
  }
}

export default BodyInicio;
