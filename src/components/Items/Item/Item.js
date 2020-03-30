import React, { Component } from 'react';
import './Item.css';



class Item extends Component {
  constructor(props){
    super(props);
      this.state={
         count : 0, //cremaos una variable para almacenar las unidades del producto
      }

  }
  decrementCount (){ //decrementamos las unidades
  if(this.state.count==0){//si estamos en 0 lo mantenemos asi
    this.setState({count:0})
  }else{//sino le eliminamos una unidad
   this.setState({count:this.state.count-1},
       function(){//tambien eliminamos del total global que esta en blog
                this.props.removeProduct(this.props.idb, this.state.count)
              });
        }
  }


    incrementCount (){//añadimos unidades
     this.setState({count:this.state.count+1});
     this.props.addProduct(this.props.idb, this.state.count + 1);//tambien del total global que esta en blog
    }
    render (){
        let Productoexistente = this.props.cantidad.find(item => item.index === this.props.idb);////buscamos en cantidad cual coincide con id seleccionado y lo metemos en esta variable
//Mostramos cada Producto
        return (
          <div className="Item">

                       <div className = "card mt-4">
                                <div className = "card-header">
                                      <h5>{this.props.title}</h5>
                                </div>
                                <div className = "card-body" >
                                    <img className="mr-3" src={this.props.url} width="150px" alt="Generic placeholder"></img>
                                    <p className="card-text"> Precio unidad:{this.props.price}€</p>
                                        
                                </div>
                                <div className = "card-footer" >
                                <button type="button"  class="btn btn-dark" onClick={() => this.incrementCount()}>+</button>
                                <h2>{this.state.count}</h2>
                                <button type="button"  class="btn btn-dark" onClick={() => this.decrementCount()}>-</button>

                                </div>

                        </div>

          </div>

        );

    }

}

export default Item;
