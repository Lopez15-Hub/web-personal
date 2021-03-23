import React, { Component } from "react";
import axios from "axios";
import Nav from '../nav';
import Footer from '../footer';
class Article extends Component {
  state = {
    title: " ",
    subtitle: " ",
    content: " ",
    article:{}
  };

  async componentDidMount() {
           const id = this.props.match.params.id // we grab the ID from the URL
        const {data} = await axios.get(`http://localhost:5000/api/articles/${id}`)
        this.setState({article: data})
  
  }

  render() {
    return (
     
      <div>
         <Nav/>
        <div className="row">
          <div className="col-2"></div>
          <div className="col-lg-8 col-sm-12">
          <h1 className="display-5 text-center">{this.state.article.title}</h1>
          
          <div className="lead">
                <p className=" justify col-6">{this.state.article.subtitle}</p>
              </div>
          <hr />
            <div>
              <div className="img"></div>
              <footer>
                <strong>Pie de foto</strong>
              </footer>
            </div>
            <header className="container-fluid">
    
             
            </header>

            <div className="justify m-5">{this.state.article.content}</div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Article;
