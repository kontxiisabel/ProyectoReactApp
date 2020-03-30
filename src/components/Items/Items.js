import React from 'react';
import Item from './Item/Item';

const Items= ( props ) => props.todos.map ((todos, index) => {  //recorremos el array de todos los productos

    return <Item //Le pasamos al componente item las siguientes propiedades
        addProduct = {props.addProduct}
        removeProduct = {props.removeProduct}
        cantidad = {props.carrito}
        title = {todos.title}
        price= {todos.price}
        url = {todos.url}
        idb = {todos.idb}
        key = {index} />
});

export default Items;
