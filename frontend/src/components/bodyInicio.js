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
    click: " ",
  };
  getArticles = async () => {
    const res = await axios.get("http://localhost:5000/api/articles");
    this.setState({ articles: res.data });
  };

  async componentDidMount() {
    this.getArticles();
  }

  render() {
    return (
      <div>
        <div>
          <h1 className="display-4 text-center">Portafolio</h1>
        </div>
        <hr />
        <div className="row row-cols-5 row-cols-md-5 g-2  ">
          <div className="col">
            <div className="card shadow">
              <div class="imgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Proyectos</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div class="imgCard " alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div class="imgCard " alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <div class=" imgCard" alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Card title</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="display-4 text-center">Lenguajes</h1>
        </div>
        <hr />
        <div className="row row-cols-5 row-cols-md-5 g-2 ">
          <div className="col">
            <div className="card shadow">
              <div class="imgCardJs" alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Javascript</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div class="imgCardReact " alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">React JS</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div class="imgCardCSS " alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">CSS</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <div class=" imgCardBtp" alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Bootstrap 5</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 className="display-4 text-center">Tutoriales</h1>
        </div>
        <hr />
        <div className="row row-cols-5 row-cols-md-5 g-2 ">
          <div className="col">
            <div className="card shadow">
              <div class="imgCardJs" alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Front-End</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <button className="btn-primary btn">Ver más</button>

            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div class="imgCardReact " alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">React JS</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                
              </div>
              <button className="btn-primary btn">Ver más</button>
            </div>
          </div>
          <div className="col">
            <div className="card shadow">
              <div class="imgCardCSS " alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">CSS</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <button className="btn-primary btn">Ver más</button>
            </div>
          </div>
          <div className="col">
            <div className="card ">
              <div class=" imgCardBtp" alt="..." />
              <div className="card-body">
                <h5 className="card-title display-5">Flutter</h5>
                <p className="card-text">
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <button className="btn-primary btn">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyInicio;
