import React, { Component } from 'react';
import './Catalogo.css';
import {Carousel,badge} from 'react-bootstrap';
class Catalogo extends Component    {
  constructor(props){
    super(props);
      this.state={


      }

  }



  render (){


    return (

          <div id="catalogo">
            <h2>CATÁLOGO <span class="badge badge-secondary">New</span></h2>

              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <ol class="carousel-indicators">
                      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img class="d-block w-100" src="https://www.unprecio.es/files/images/79/d/estuche-de-maquillaje-7-brochas-323580.jpg " alt="First slide" width="50" height="600"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="https://firebasestorage.googleapis.com/v0/b/myfirebase-24994.appspot.com/o/imagenes%2FMac%20Waterproof%20Long-lasting%20Mascara.webp?alt=media&token=14c2b31f-ba29-4b72-953c-032f0fe6b4d8" alt="Second slide" width="500" height="600"/>
                      </div>
                      <div class="carousel-item">
                        <img class="d-block w-100" src="https://khalphora.b-cdn.net/wp-content/uploads/2018/10/porta-3.jpg" alt="Third slide" width="50" height="600"/>
                      </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                      <span class="carousel-control-next-icon" aria-hidden="true"></span>
                      <span class="sr-only">Next</span>
                    </a>
             </div>
         </div>

    );
  }
}
  export default Catalogo ;
