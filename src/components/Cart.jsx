import "../styles/cart.css";

const Cart = ({ cartItems, increaseQty, decreaseQty, removeItem }) => {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const gst = subtotal * 0.18;
  const total = subtotal + gst;

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item) => {
            const itemTotal = item.price * item.quantity;

            return (
              <div className="cart-item" key={item.id}>
                <div className="cart-left">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <p>Price: ₹{item.price}</p>
                    <p className="item-total">
                      Item Total: ₹{itemTotal.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                </div>

                <button
                  className="remove-btn"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            );
          })}

          <div className="cart-summary">
            <p>Subtotal: ₹{subtotal.toFixed(2)}</p>
            <p>GST (18%): ₹{gst.toFixed(2)}</p>
            <h3>Total: ₹{total.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
