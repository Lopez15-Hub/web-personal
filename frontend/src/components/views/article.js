import { Component } from 'react';
import Nav from '../../components/nav';
import ArticleBody from '../articleBody';
import Footer from '../footer';

class Article extends Component{
  
      
      render(){
        
    return(
        <div>
            
            <Nav/>
            <ArticleBody/>
            <Footer/>
        </div>
    );
}
}

export default Article;
