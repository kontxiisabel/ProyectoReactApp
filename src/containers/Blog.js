import React, { Component } from 'react';
import axios from '../axios';
import Items from '../components/Items/Items';
import { Redirect } from 'react-router-dom';
import './Blog.css';
//import Login from 'C:/ReactApp2/src/components/Auth/Auth';
import { BrowserRouter,Route } from 'react-router-dom';
import Catalogo from '../components/Catalogo/Catalogo';
import {button} from 'react-bootstrap';

class Blog extends Component {

  constructor(props){
    super(props);
    this.state={
        todos : [], //creamos un array vacio para guardar todos los productos de la base de datos
        error: false,
        Continuar:false,

    }


    this.state.carrito = props.carrito;
    this.state.total=this.getTotal();

  }




  componentDidMount(){//se obtiene los datos almacenados en la base de datos y se almacena en la variable todos
      axios.get('/todos.json')
      .then(response => {
              let todos = [];
              for (let key in response.data) {
                  todos.push({
                      ...response.data[key],
                      idb: key
                  });
              }
              //console.log(todos);
              this.setState({todos : todos});
                }).catch(error => {
                this.setState({ error: true });
              });
  }


  addProduct = (index, count) => {
            let carritos = [...this.state.carrito];
            let ProductoExistente = carritos.find(item => item.index === index);//busca el producto
            if(ProductoExistente){//si el producto existe
              ProductoExistente.count = count; //añadimos una unidad al producto
            } else { //si el producto no existe añadimos al carrito ese producto
              let defaultProduct = this.state.todos.find(item => item.idb === index);//obtenemos del array del producto ese producto mediante su id
              let newData = {index: index, count : count,           //en una nueva varable metemos el producto con sus propiedades
                title:defaultProduct.title,
                url: defaultProduct.url,
                price: defaultProduct.price };

              carritos.push(newData);//lo insertamos al final de array carritos

            }
            this.setState({carrito : carritos}, () => { this.setState({ total: this.getTotal() })});//actualizamos el array carritos e llamamos a la funcion para calcular el precio total con el nuevo producto
            this.props.EstadoCarrito(carritos);
     }



  removeProduct = (index, count) => { //Eliminamos producto
    let carritos = [...this.state.carrito];
    let ProductoExistente = carritos.find(item => item.index === index); //buscamos en el carrito el producto seleccionado si existe o no
    if(ProductoExistente){ //en el caso de que exista quitamos una unidad
          let product = ProductoExistente;
          product.count=count;
          if(product.count===0){//si no ha llegado a 0 le quitamos unidades
                 carritos.splice(ProductoExistente, 1);
            }
          this.setState({carrito:carritos});//actualizamos el estado de carritos
    }

    this.props.EstadoCarrito(carritos);
    this.setState({total : this.getTotal()});//llamamos a getTotal para recalcular el total del precio

  }

  getTotal = () => {//calculamos en precio de todo lo que tenemos acumulado en el carrito
    let total = 0;
    if(this.state.carrito && this.state.carrito.length > 0){ //si el carrito esta lleno
    let i=0;
            for( i=0; i< this.state.carrito.length; i++){
              total=(this.state.carrito[i].count*this.state.carrito[i].price)+total; //calculamos el total del precio
            }

    }
    return total; //devolmemos el valor calculado
  }

  RealizarPedido = () => {
    if(this.state.carrito.length > 0){//comprobamos si el carrito esta vacio o no.
        this.setState({Continuar : true});//si esta no nos deja continuar
    }else{
      this.setState({Continuar : false}); //en caso de que este lleno podemos continuar

        alert('¡Debe elegir al menos un producto!');

    }
   console.log(this.state.Continuar)
  }



  render() {

    if(this.state.Continuar){
      return <Redirect to='/realizar-pedido' /> //si nos deja continuar porque el carrito no esta vaccio y lo enlaza a la siguiente pagina
    }
     //Muestra el listado de productos
      return (
          <div className="container">

              <section className="Productos">
                  <h1 >LISTADO DE PRODUCTOS</h1>
                  <div className="PrecioTotal">
                  <h2>{this.state.total}€</h2>
                   <img src="https://www.xenonfactory.es/wp-content/uploads/2019/01/carrito-compras-desarrollo-tienda-virtual.png" width="200" height="100" />
                  </div>
                  <div className="Realizar pedido">
                  <br></br>
                    <button type="button" class="btn btn-dark" onClick={this.RealizarPedido}>Realizar pedido</button>
                  </div>
                  <div className="list-unstyled">
                    <Items addProduct={this.addProduct} removeProduct={this.removeProduct} todos={this.state.todos} carrito={this.state.carrito} />
                  </div>

              </section>


          </div>

      );

  }

}

export default Blog;
