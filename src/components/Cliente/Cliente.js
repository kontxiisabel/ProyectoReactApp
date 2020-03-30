import React, { Component } from 'react';

import { Link, Redirect } from 'react-router-dom';
import axios from '../../axios';



class Cliente extends Component {
  constructor(props){
    super(props);
      this.state={//creamos las variables cuales guardaran los datos que insertara el usuario
        nombre:"",
        apellidos:"",
        email:"",
        codigoPostal:"",
        telefono:"",
        direccion:"",
       datoscliente:[],
       datosaenviar:[],

       datosValidos:false,
      }

  }



handleFormSubmit = () => {
  const data = {  nombre:this.state.nombre, //las variables que se cargaran en la base de datos
    apellidos:this.state.apellidos,
    email:this.state.email,
    direccion:this.state.direccion,
    codigoPostal:this.state.codigoPostal,
    carrito:this.props.estado.carrito,
    poblacion: this.state.poblacion,
    telefono:this.state.telefono,
    precioTotal:this.props.estado.Total,
    cantidadTotal:this.props.estado.Unidadestodos, };



      let datosValidar= { //obligatoriamente tiene que rellenar estos campos
            nombre:this.state.nombre,
            apellidos:this.state.apellidos,
            email:this.state.email,
            direccion:this.state.direccion,
            telfono:this.state.telefono,
            codigoPostal:this.state.codigoPostal,

        }
        const entries = Object.entries(datosValidar) //comprueba si se han insertado datos en todos los inputs

        for (const [campo, valor] of entries) {
            if(valor == null || String(valor).trim() == "" ){

            alert('Debe rellenar todos los campos') //sino sale una alerta de que tiene que rellenar todo
            return;

            }

        }

        axios.post('/pedidos.json',data)//enviamos el pedido con todos los datos a la base de datos
        .then(response => {
            this.setState({datosValidos : true,}); //damos confirmacion que todos los datos se han rellenado
        });



}

    handleInputChange = (event) => { //obtenemos los datos de los inputs
        this.setState({ [event.target.name]: event.target.value });
    }


    render (){




        if(this.state.datosValidos){ //si se han rellenado todos los campos
            return (
              <div class="alert alert-success" role="alert">
                    <h4 class="alert-heading">¡Gracias!</h4>
                    <p>Su envio ha sido enviado correctamende.</p>
                    <p class="mb-0">Si desea volver a la pagina para realizar una nuevo pedido pulse el siguiente botón.</p><br></br>
                    <a class="btn btn-dark" href="/" role="button">Realizar nuevo Pedido</a>
            </div>
          )
       }
   //Se muestra el formulario a rellenar
        return (

          <div className="DatosCliente">

                  <h2>Información del Solicitante</h2>

                  <div className="formulario">
                      <form>
                          <div className="form-row">
                              <div className="form-group col-md-4">
                                  <label htmlFor="inputEmail">Email</label>
                                  <input type="email" name="email" value={this.state.email} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputEmail" placeholder=""/>
                              </div>

                              <div className="form-group col-md-3">
                                  <label htmlFor="nombre">Nombre</label>
                                  <input type="text" name="nombre" value={this.state.nombre} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="nombre" placeholder=""/>
                              </div>

                              <div className="form-group col-md-5">
                                  <label htmlFor="apellidos">Apellidos</label>
                                  <input type="text" name="apellidos" value={this.state.apellidos} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="apellidos" placeholder=""/>
                              </div>

                          </div>
                          <div className="form-group">
                              <label htmlFor="inputAddress">Dirección</label>
                              <input type="text" name="direccion" value={this.state.direccion} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputAddress" placeholder=" " />
                          </div>
                          <div className="form-row">
                              <div className="form-group col-md-6">
                                  <label htmlFor="inputCity">Población</label>
                                  <input type="text" name="poblacion" value={this.state.poblacion} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="inputCity" placeholder=""/>
                              </div>

                              <div className="form-group col-md-3">
                                  <label htmlFor="codigoPostal">Códido postal</label>
                                  <input type="text" name="codigoPostal" value={this.state.codigoPostal} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="codigoPostal"/>
                              </div>
                              <div className="form-group col-md-3">
                                  <label htmlFor="codigoPostal">Teléfono</label>
                                  <input type="text" name="telefono" value={this.state.telefono} onChange={(event)=>this.handleInputChange(event)} className="form-control" id="telefono"/>
                              </div>
                          </div>


                      </form>


                  </div>

                  <button type="button"  class="btn btn-dark"  onClick={this.handleFormSubmit}>Realizar Pedido</button>

              </div>



        );

    }

}

export default Cliente;
