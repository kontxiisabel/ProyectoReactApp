import React, { Component } from 'react';

class Confirm extends Component {
constructor(props){
  super(props);
  this.state={
    precio:0, //aqui el precio por unidad
    pricetotal:0, //aqui el precio total del pedido
    nitems:0//qui guardamos la cantidad de productos seleccionados

  }
}

    render (){
      if(this.props.price){ //si tenemos el valor del precio de ese producto lo guardamos en la variable precio
        this.state.precio = this.props.price;
      }


        this.state.nitems =this.props.cantidad; //pasamos las variables cantidad contado en Items

  this.state.pricetotal=this.state.precio*this.state.nitems; //calculamos el precio total y metemos en la siguiente variable
        return (

            <span  className="list-group-item list-group-item-action">
                <div className="d-flex w-100 justify-content-between">
                    <img alt="" src={this.props.url} width="50px" height="50px"/>
                    <h5>{this.props.title}</h5>
                    <p>Precio producto: {this.state.precio}€</p>
                    <p>Unidades: {this.state.nitems}</p>
                    <h5>Precio: {this.state.pricetotal}€</h5>

                </div>

            </span>



        );

    }

}

export default Confirm;
