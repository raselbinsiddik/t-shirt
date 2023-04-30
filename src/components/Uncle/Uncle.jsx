import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext);  
    return (
        <div>
            <h2>uncle</h2>
            <p><small>grandpa money:{money}</small></p>
            <button onClick={() => setMoney(money
             + 1000)}>send 100tk</button>
            <section className='flex'>
                <Cusin>nabil</Cusin>
                <Cusin>nabila</Cusin>
            </section>
        </div>
    );
};

export default Uncle;