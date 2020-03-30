import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component {
  constructor(props){
    super(props);
      this.state={

      }

  }

    render (){//Links para acceder al resto de las paginas

        return (


              <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                     <a class="navbar-brand" href="#">MAC-Cosmetics</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span>
                    <span class="navbar-toggler-icon"></span>
                    </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li className="nav-item active">
                            <Link className="nav-link" to={{ //Enlaces a otras paginas
                                pathname: '/',
                                hash: '#submit',
                                search: '?quick-submit=true',
                                state: this.props.carrito
                            }}>Productos <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                            <Link className="nav-link" to={{
                                pathname: '/pedidos'

                            }}>Pedidos</Link>
                            </li>
                            <Link className="nav-link" to={{
                                pathname: '/catologo'

                            }}>Catálogo</Link>
                            <li class="nav-item dropdown">
                            </li>

                         </ul>
                    </div>
                </nav>





        );

    }

}

export default Navbar;
