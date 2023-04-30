import React from 'react';
import './Cart.css'

const Cart = ({ cart, handleRemoveFromCart }) => {
    // conditional rendaring mesaage:
    //1 if else
    let message;
    if (cart.length === 0) {
        message= <p>please add some products</p>
    }
    else {
        message= <h3>thank  you bororlock</h3>
    }
    return (
        <div>
            <h2 className={cart.length >= 1 ? 'blue' : 'red'}>Order summery:{cart.length}</h2>
            <p className={`bold bordered ${cart.length === 3 ? 'gold':'purple'}`}>something</p>
            {/*2 ternary operator condition? true false*/}
            {cart.length >2 ? <span className='orange'>Aro kino</span>: <apan>fokir</apan>}
            {message}
            {
                cart.map(tshirt => <p tshirt key={tshirt._id}>{tshirt.name}
                    <button onClick={()=> handleRemoveFromCart(tshirt._id)}>X</button></p>)  
            }
            {/*3 logical &&: */}
            {
              cart.length === 2 && <p>Double bonuse !!!</p>  
            }
            {
                cart.length === 3 || <h3>tinta hoila na</h3>
            }
        </div>
    );
};

export default Cart;
