import React from 'react';
import Cusin from '../Cusin/Cusin';

const Aunty = ({ring}) => {
    return (
        <div>
            <h2>aunty</h2>
            <section className='flex'>
                <Cusin>abir</Cusin>
                <Cusin hasFriend={true} ring={ring}>nibir</Cusin>
            </section>
        </div>
    );
};

export default Aunty;