import React, { Component } from "react";
import axios from "axios";

class Article extends Component {
  state = {
    articles: [],
    title: " ",
    subtitle: " ",
    content: " ",
    id: " ",
  };

  getArticles = async () => {
    const res = await axios.get("http://localhost:4000/api/articles");
    this.setState({ article: res.data });
  };
  getArticle = async () => {
    const resAll = await axios.get("http://localhost:4000/api/articles/");

    this.setState({ id: resAll.data[0]._id });
    console.log(resAll);

    let id = this.state.id;
    console.log(id);
    const res = await axios.get("http://localhost:4000/api/articles/" + id);
    this.setState({ title: res.data.title });
    this.setState({ subtitle: res.data.subtitle });
    this.setState({ content: res.data.content });
    console.log(res);
  };
  async componentDidMount() {
    this.getArticle();
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-lg-8 col-sm-12">
            <div>
              <div className="img"></div>
              <footer>
                <strong></strong>
              </footer>
            </div>
            <header className="container-fluid">
              <h1 className="display-5 text-center">{this.state.title}</h1>
              <div className="lead">
                <p className=" justify col-6">{this.state.subtitle}</p>
              </div>
              <hr />
            </header>

            <div className="justify m-5">{this.state.content}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Article;
