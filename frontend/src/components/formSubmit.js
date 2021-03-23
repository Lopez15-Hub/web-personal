import React, { Component } from "react";
import axios from "axios";
import ArticlesList from './articlesList';
function addP() {
  let div = document.createElement("div");
  let title = document.createElement("h4");
  let textArea = document.createElement("textarea");
  let button = document.createElement("button");
  let pArticle = document.getElementById("pArticle");
  let btnAdd = document.getElementById("add");
  div.setAttribute("id", "pForm");
  title.setAttribute("class", "display-5");
  title.textContent = "Parrafo";
  textArea.setAttribute("class", "form-control");
  textArea.setAttribute("rows", "12");
  textArea.setAttribute("cols", "12");
  button.innerHTML = "Eliminar";
  button.setAttribute("class", "btn btn-danger");
  button.setAttribute("type", "button");

  btnAdd.setAttribute("class", "m-2 btn btn-primary");
  pArticle.appendChild(title);
  pArticle.appendChild(textArea);
  pArticle.appendChild(button);
  pArticle.appendChild(btnAdd);
  let ps = document.getElementById("ps");
  ps.appendChild(div);
  button.setAttribute("onclick", "pArticle.setAttribute('hidden',' ');");
}

class AñadirArticulo extends Component {
  state = {
    articles: [],
    parrafos: [],
    title: " ",
    subtitle: " ",
    content: " ",
    img: "",
    urlArticle: "",
  };

  getUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/articles");
    this.setState({ articles: res.data });
  };
  async componentDidMount() {
    
    this.getUsers();
    
  }
  onChangueTitle = (e) => {
    this.setState({
      title: e.target.value,
    });
    console.log(e.target.value);
  };
  onChangueSubtitle = (e) => {
    this.setState({
      subtitle: e.target.value,
    });
  };
  onChangueContent = (e) => {
    this.setState({
      content: e.target.value,
    });
    console.log(e.target.value);
  };

  onChangueurlArticle = (e) => {
    this.setState({
      urlArticle: e.target.value,
    });
    console.log(e.target.value);
  };

  onChangueImg = (e) => {
    this.setState({
      img: e.target.value,
    });
  };

  onSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/articles", {
      title: this.state.title,
      subtitle: this.state.subtitle,
      content: this.state.content,
      img: this.state.img,
      urlArticle: this.state.urlArticle
    });
    this.getUsers();
    console.log(res);
    e.preventDefault();
  };


 

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="row border shadow-lg col-6">
            <form onSubmit={this.onSubmit}>
              <h1 id="title" className="display-5 text-center">Subir articulo</h1>
              <hr />
              <div className="form-group">
                <h4 className="display-5">Url</h4>
                <input
                  onChange={this.onChangueurlArticle}
                  id="titleArticle"
                  type="text"
                  className="form-control form-control-lg "
                />
              </div>
              <div className="form-group">
                <h4 className="display-5">Titulo</h4>
                <input
                  onChange={this.onChangueTitle}
                  id="titleArticle"
                  type="text"
                  className="form-control form-control-lg "
                />
              </div>
              <div className="form-group">
                <h4 className="display-5">Subtitulo</h4>
                <input
                  onChange={this.onChangueSubtitle}
                  id="subtitleArticle"
                  type="text"
                  className="form-control form-control-lg "
                />
                <div id="ps" className="form-group">
                  <div id="pArticle">
                    <h4 id="formTitle" className="display-5">
                      Parrafo
                    </h4>

                    <textarea
                      onChange={this.onChangueContent}
                      id="content"
                      rows="12"
                      cols="12"
                      className="form-control"
                    ></textarea>

                    <input
                      id="add"
                      onClick={addP}
                      type="button"
                      className="mt-2 btn btn-primary"
                      value="+ Añadir parrafo "
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  onChange={this.onChangueImg}
                  type="file"
                  className="form-control form-control-lg p-2 m-2"
                />
              </div>
              <div className="form-group row">
                <div className="col-4"></div>
                <button
                  type="submit"
                  className="btn btn-outline-success btn-block m-2 col-4"
                >
                  Subir
                </button>
                <div className="col-4"></div>
              </div>
            </form>
          </div>
        
        <ArticlesList/>
      
        </div>
       
      </div>
    );
  }
}

export default AñadirArticulo;
