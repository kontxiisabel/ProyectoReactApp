
import React, { Component } from 'react';
import { BrowserRouter,Route } from 'react-router-dom';
import './App.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './containers/Blog';
import Confirmar from './components/Confirmar/Confirmar';
import Pedidos from './components/Pedidos/Pedidos';
import MostrarPedido from './components/MostrarPedido/MostrarPedido';
import Cliente from './components/Cliente/Cliente';
import Navbar from './components/Navbar/Navbar';
import Catalogo from './components/Catalogo/Catalogo';



class App extends Component {
  constructor(props){
    super(props);
      this.state={
        carrito: [], //se crea una lista vacia para para despues insertar los productos seleccionados
        Total: 0,  //se crea una variable para meter el calculo del precio
        Unidadestodos: 0 //se crea una variable para contar todas las unidades seleccionadas
      }

  }


    EstadoCarrito = (carrito) => { //evento, le pasamos el carrito actualiza en el estado y llama a la funcion CalcularPrecioTotal
        this.setState({carrito: carrito}, () => {this.CalcularPrecioTotal()});
    }

    CalcularPrecioTotal = () => { //Aqui se calcula todo el precio

        let Totala = 0; //se inicializa una nueva variable para el total del precio
        let Unidades = 0; //se inicializa otra variable para el total de productos seleccionados
        let i=0; //se inicializa una variable que actuara como indice para contar


        for(i; i < this.state.carrito.length ; i++){ //recorremos todo el carrito

            Totala = ((this.state.carrito[i].price) * this.state.carrito[i].count)+Totala; //obtiene el precio del producto elegido lo multiplica por las unidades de ese producto y se guarda en una variable Totala, la siguiente vez a esta variable se le suma el nuebo producto seleccionado con sus unidades
            Unidades = (this.state.carrito[i].count)+Unidades;//Se calculan todas las unidades como en el caso anterior
        }

        this.setState({Total: Totala, Unidadestodos: Unidades});//actualizamos el estado con esas variabls

    }

  render() {//A continuacion a cada Componente se le pasan las variables de este componente
    return (

        <div className="App">
        <div className="container">
              <BrowserRouter>
                        <Route path="/" render={(props) => <Navbar {...props} carrito={this.state.carrito} />} />
                        <Route path="/" exact render={(props) => <Blog {...props} EstadoCarrito={this.EstadoCarrito} carrito={this.state.carrito} />} />
                        <Route path="/pedidos" exact component={Pedidos} />
                        <Route path="/catologo"  exact render={(props) => <Catalogo/>} />
                        <Route path="/mostrar-pedido" exact render={(props) => <MostrarPedido {...props} EstadoCarrito={this.EstadoCarrito} carrito={this.state.carrito}  />} />
                        <Route path="/realizar-pedido" exact render={(props) => <Confirmar {...props} estado={this.state} EstadoCarrito={this.EstadoCarrito} carrito={this.state.carrito}  />} />
                        <Route path="/ficha solicitante" exact render={(props) => <Cliente {...props} estado={this.state} />} />


                </BrowserRouter>
          </div>
        </div>

    );
  }
}

export default App;
