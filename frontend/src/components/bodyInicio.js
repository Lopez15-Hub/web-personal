import React, { Component } from "react";
import axios from "axios";

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
      <div className=" m-5">
        
        {/*Section 1*/}

        <div className="container ">
          <div>
            {/*IMAGE*/}
            <div className="bgP1" />
          </div>

          <h1 className="display-5 text-center">
            {/*Title*/}
            Una academia dedicada al preparamiento de profesionales
          </h1>
        </div>
        <div className=" m-5  row">
          {/*Text*/}
          <p className="container justify col-10 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa modi,
            deleniti quibusdam voluptates qui sequi quis excepturi nulla rerum.
            Possimus nam perspiciatis praesentium sit libero sunt harum nesciunt
            facilis sed? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ipsa modi, deleniti quibusdam voluptates qui sequi quis
            excepturi nulla rerum. Possimus nam perspiciatis praesentium sit
            libero sunt harum nesciunt facilis sed? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsa modi, deleniti quibusdam
            voluptates qui sequi quis excepturi nulla rerum. Possimus nam
            perspiciatis praesentium sit libero sunt harum nesciunt facilis sed?
          </p>
        </div>

        {/*Section 2*/}
       
        <div className="container">
          <div>
            {/*IMAGE*/}
            <div className="bgP2" />
          </div>

          <h1 className="display-5 text-center">
            {/*Title*/}
            Estudia con los mejores profesionales del país
          </h1>
        </div>

        <div className=" m-5  row">
          {/*Text*/}
          <p className=" container justify col-10 ">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa modi,
            deleniti quibusdam voluptates qui sequi quis excepturi nulla rerum.
            Possimus nam perspiciatis praesentium sit libero sunt harum nesciunt
            facilis sed? Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Ipsa modi, deleniti quibusdam voluptates qui sequi quis
            excepturi nulla rerum. Possimus nam perspiciatis praesentium sit
            libero sunt harum nesciunt facilis sed? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Ipsa modi, deleniti quibusdam
            voluptates qui sequi quis excepturi nulla rerum. Possimus nam
            perspiciatis praesentium sit libero sunt harum nesciunt facilis sed?
          </p>
        </div>
       
        {/*Section 3*/}
        
        <div>
          <h1 className="display-4 text-center">Portafolio</h1>
        </div>
        <hr />
        <div className=" row row-cols-5 row-cols-md-5 g-2  ">
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
        
        {/*Section 4*/}
       
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
        
        {/*Section 5*/}
       
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
              <button className="btn-primary btn">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BodyInicio;
