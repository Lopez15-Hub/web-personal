import React,{Component} from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
class ArticlesList extends Component{
    state = {
        articles: [],
        parrafos: [],
        title: " ",
        subtitle: " ",
        content: " ",
        img: "",
        urlArticle: " ",
      };
    getUsers = async () => {
        
        const res = await axios.get("http://localhost:5000/api/articles");
        this.setState({ articles: res.data });
      };
      async componentDidMount() {
    
        this.getUsers();
    
        
      }

    deleteArticle = async (id) => {
        let confirm = window.confirm("Está seguro que desea eliminar el articulo?");
        if (confirm) {
          await axios.delete("http://localhost:5000/api/articles/" + id);
          alert("Eliminación exitosa");
          this.getUsers();
        } else if (!confirm) {
          alert("Eliminación cancelada");
        }
      };
    
      updateArticle = async (id) => {
    
          await axios.put("http://localhost:5000/api/articles/" + id);
          alert("Articulo actualizado exitosamente.");
          this.getUsers();
    
    
      };
    render(){
        return(
            <div className="col-6  container-fluid  bg-white">
            <div>
              <h4 className="display-5">Articulos Subidos:</h4>
              <ul className="list-group m-3 ">
                {this.state.articles.map((articles) => (
                  <li
                    className="list-art m-2"
                    key={articles._id}
                  >
                    {articles.title}

                    <Link to={ "/articles/" + articles._id} className="p-3">
                      Ver articulo
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteArticle(articles._id)}
                    >
                      Eliminar
                    </button>

                    <Link
                      to={"/edit/"+ articles._id}
                      className="btn btn-warning m-2"
                      onClick={this.changueTitle}
                    >
                      Editar
                    </Link>

                    <p>
                      Fecha de creación:
                      <strong> {articles.createdAt.slice(0, 10)}  </strong>
                      Hora:
                      <strong> {articles.createdAt.slice(11, 19)}</strong>
                    </p>

                   <hr/>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
        
    }
    
}

export default ArticlesList;