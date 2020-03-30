import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Pedido extends Component {

  constructor(props){
    super(props);
      this.state={


      }
 this.state.numeropedido=this.props.num+1; //obtenemos el numero de pedido pero empezamos a mostrar a partir del numero 1
  }

    render (){

//Mostramos los datos generales de cada pedido
        return (

            <div className="Pedido">

              
                <Link className="nav-link list-group-item list-group-item-action flex-column align-items-start" to={{
                    pathname: '/mostrar-pedido',
                    hash: '#submit',
                    search: '?quick-submit=true',
                    state: this.props.datosPedido
                    }}>
                    <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">PedidoId: {this.state.numeropedido}</h5>
                          <p className="mb-1">Usuario: {this.props.usuario}</p>

                      </div>
                </Link>

            </div>



        );

    }

}

export default Pedido;
