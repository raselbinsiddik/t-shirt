import React from 'react';
import './Tshirt.css'
const Tshirt = ({ tshirt, handleAddToCart }) => {
    const { picture, name, price } = tshirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <div>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
           </div>
            <button onClick={()=>handleAddToCart(tshirt)} className='btn'>Buy Now</button>
        </div>
    );
};

export default Tshirt;