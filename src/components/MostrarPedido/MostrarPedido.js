import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Confirm from '../Confirmar/Confirm/Confirm';
import axios from '../../axios';


class MostrarPedido extends Component {

    constructor(props){
        super(props);
        this.state = this.props.location.state;
    }

    deleteHandle = ()=> {
        axios.delete('pedidos/' + this.state.idb + '.json' )
        .then(response => {
                this.setState({pedidoBorrado : true});
            });
    }



    render (){

        if(this.state.pedidoBorrado){
            return <Redirect to='/pedidos' />
        }


        var listaProductos = this.state.carrito.map((item, index)=>{
            return <Confirm key={index} cantidad={item.count} title={item.title}
            price={item.price} url={item.url}/>
        })

        return (

            <div className="card mt-4">
               <div class="card-body">
                    <span class="badge badge-pill badge-warning">¡Su producto llegará en 2 días!</span>
                      <div class="DatosSolicitante" >
                              <h3>Datos del Solicitante </h3>
                               <p> Email: {this.state.email} </p>
                               <p> Nombre: {this.state.nombre}    Apellidos:  {this.state.apellidos} </p>
                               <p> Dirección: {this.state.direccion}</p>
                               <p> Población: {this.state.poblacion}    CP: {this.state.codigoPostal}  Telefono:{this.state.telefono}</p>

                        </div>
                        <div class="DatosProductos">
                              <h3>Productos Solicitados</h3>
                              {listaProductos}
                              <h5 className="card-title">Unidades: {this.state.cantidadTotal} </h5>
                              <h5 className="font-weight-bold">Precio total: {this.state.precioTotal}€</h5>
                       </div>

                      <Link to={{
                                      pathname: '/pedidos',
                                      hash: '#submit',
                                      search: '?quick-submit=true'
                                  }}>

                      </Link>
                      <button onClick={this.deleteHandle} type="button" className="btn btn-dark" data-toggle="modal" data-target="#exampleModal" >Eliminar Pedido</button>
            </div>
          </div>


        );

    }

}

export default MostrarPedido;
