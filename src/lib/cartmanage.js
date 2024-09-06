import toast from "react-hot-toast";

export const cartManage = (isExistCartItem, cartItem, id, wantedItem, setCartItem) => {
    if (isExistCartItem) {
        // If item exists in the cart, increase the quantity
        const updatedCart = cartItem.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity by 1
            : item
        );
        setCartItem(updatedCart); // Update the state with the new cart
        toast.success('Extra added! Your cart is growing!')
        return;
      } else {
           // If item does not exist in the cart, add it with quantity 1
      const newItem = { ...wantedItem, quantity: 1 }; // Set default quantity to 1
      const updatedCart = [...cartItem, newItem];
      setCartItem(updatedCart); // Update the state with the new cart
      toast.success('Success! Item added to your shopping cart!')
      
      }  
}