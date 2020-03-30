import React, { Component } from 'react';
import Confirm from './Confirm/Confirm';
import { Link } from 'react-router-dom';

class Confirmar extends Component {
constructor(props){
  super(props);
  this.state={


  }
}


    render (){

        const Items = this.props.estado.carrito.map((item, index)=>{ //recorre el carrito
           return <Confirm //pasa las propiedades al metodo confirm
           title={item.title} cantidad={item.count}
           price={item.price} url={item.url} key={index}/>
        })
//Muestra el pedido
        return (

            <div className="RealizarPedido">

                
                <div className="list-group">
                    {Items}
                    <span className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                            <h5 className="font-weight-bold">Precio: {this.props.estado.Total}€</h5>

                        </div>

                    </span>
                </div>

                <div className="container">
                        <Link to={{
                                        pathname: '/ficha solicitante',
                                        hash: '#submit',
                                        search: '?quick-submit=true'

                                    }}><br></br><button  type="button" className="btn btn-dark">Continuar</button></Link>


                </div>


            </div>


        );

    }

}

export default Confirmar;
