export const calculateTotalPrice = (cartItems) => {
    return cartItems.reduce((total, item) => {
      return total + item.current_price * item.quantity;
    }, 0); 
  };
  

  