import React, { Component } from 'react';

import Pedido from './Pedido/Pedido'
import axios from '../../axios';

class Pedidos extends Component {
  constructor(props){
    super(props);
      this.state={
    clientes : [],//creamos un array vacio de clientes
    error: false
      }

  }


    componentDidMount(){
        axios.get('/pedidos.json') //obtnemos de la base de datos todos los datos del pedido e insertamos en el array clientes
        .then(response => {

                let clientes = [];

                for (let key in response.data) {
                    clientes.push({
                        ...response.data[key],
                        idb: key
                    });
                }
                //console.log(clientes);
                this.setState({clientes : clientes});
                  }).catch(error => {
                  this.setState({ error: true });
                });
    }

    render (){

        const Cliente = this.state.clientes.map ((pedido, index) => { //recorremos el array de clientes y lo metemos en Pedidos
            return <Pedido usuario = {pedido.nombre}  key={index} num={index} datosPedido={pedido}/> //elegimos las propiedades que pasaremos al componente Pedido
        });

        //Se muestran todos los pedidos
        return (

            <div className="Pedidos">

                <h1>PEDIDOS</h1>
                <div className="list-group">
                    {Cliente}
                </div>
            </div>


        );

    }

}

export default Pedidos;
