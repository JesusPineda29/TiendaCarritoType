
// CUSTOM HOOK
// van guardados en la carpeta hooks
// solo deben tener logica, no debe tener vista, por eso en .js 

import { useState, useEffect, useMemo } from "react"
import {db} from '../data/db.js';

export const useCart = () => {

    const initialCart = () => {
        const localStorageCart = localStorage.getItem('cart');
        return localStorageCart ? JSON.parse(localStorageCart) : [];
    }

    const [data] = useState(db);
    const [cart, setCart] = useState(initialCart);


    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }
        , [cart]);


    const addToCart = (item) => {
        const itemExist = cart.findIndex(cartItem => cartItem.id === item.id);
        if (itemExist >= 0) { // Verificar si el item ya existe en el carrito
            const updatedCart = [...cart]; // Crear una copia del carrito
            updatedCart[itemExist].quantity++; // Incrementar la cantidad del item existente
            setCart(updatedCart); // Actualizar el estado del carrito
        } else {
            item.quantity = 1; // Asignar una cantidad inicial de 1
            setCart([...cart, item]);
        }
    }


    function removeFromCart(id) {
        setCart(prevCart => prevCart.filter(guitar => guitar.id !== id));
    }


    function increaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity < 5) { // Limitar la cantidad máxima a 5
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        })
        setCart(updatedCart);
    }

    function decreaseQuantity(id) {
        const updatedCart = cart.map(item => {
            if (item.id === id && item.quantity > 0) { // Limitar la cantidad minima a 1
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        })
        setCart(updatedCart);
    }

    function clearCart() {
        setCart([]);
    }








    // state Derivado
    const isEmpty = useMemo( () => cart.length === 0, [cart] ); // USEMEMO

    const cartTotal = useMemo(() => cart.reduce((total, item) => total + (item.price * item.quantity), 0),[cart]); // REDUCE



    return {
        data,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        isEmpty,
        cartTotal
    }
}



