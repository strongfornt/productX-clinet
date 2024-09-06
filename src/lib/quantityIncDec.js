export const quantityIncDec = (id, cartItem, setCartItem, instruction) => {
        if(instruction ==='inc'){
              // If item exists in the cart, increase the quantity
        const updatedCart = cartItem.map((item) =>
            item.id === id
              ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
              : item
          );
          setCartItem(updatedCart); // Update the state with the new cart
          
          return;
        } else if(instruction === 'dec'){
            const updatedCart = cartItem.map((item) =>
                item.id === id
                  ? { ...item, quantity: item.quantity - 1 } // Decrease quantity by 1
                  : item
              );
              setCartItem(updatedCart); // Update the state with the new cart
              
              return;
        }else if(instruction === 'remove'){
            const updatedCart = cartItem.filter((item) => item.id !== id)
            setCartItem(updatedCart)
            return
        }
}