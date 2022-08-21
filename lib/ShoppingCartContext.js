import { useContext, createContext, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import ShoppingCart from "../components/Cart";
const ShoppingCartContext = createContext({})

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}){
    const [isOpen, setIsOpen] = useState(false)
    const [cartItems, setCartItems] = useLocalStorage("shopping-cart", [])
    console.log(cartItems)
    const cartQuantity = cartItems?.reduce(
        (quantity, item) => item.quantity + quantity,
        0
    )
      
    const openCart = () => setIsOpen(true)
    const closeCart = () => setIsOpen(false)
    function getItemQuantity(id) {
        return cartItems.find(item => item.id === id)?.quantity || 0
    }

    function increaseCartQuantity(id, img, price, name) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, img, price, name, quantity: 1 }]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
              } else {
                return item
              }
            })
          }
        })
    }

    function batchIncreaseCartQuantity(id, quantity, img, price, name) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id) == null) {
            return [...currItems, { id, img, price, name, quantity: Number(quantity)}]
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: Number(item.quantity + quantity) }
              } else {
                return item
              }
            })
          }
        })
      }
    
    function decreaseCartQuantity(id) {
        setCartItems(currItems => {
          if (currItems.find(item => item.id === id)?.quantity === 1) {
            return currItems.filter(item => item.id !== id)
          } else {
            return currItems.map(item => {
              if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 }
              } else {
                return item
              }
            })
          }
        })
      }
    
    function removeFromCart(id) {
        setCartItems(currItems => {
          return currItems.filter(item => item.id !== id)
        })
      }
    


    return (
        <ShoppingCartContext.Provider value={{
            getItemQuantity,
            increaseCartQuantity,
            batchIncreaseCartQuantity,
            decreaseCartQuantity,
            removeFromCart,
            cartItems,
            cartQuantity,
            openCart,
            closeCart
        }}>
            {children}
            <ShoppingCart isOpen={isOpen}/>
        </ShoppingCartContext.Provider>
    )
}