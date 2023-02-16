import expresso from '../../assets/Type=Expresso.svg';
import { ShoppingCartSimple } from "phosphor-react";
import { Buy, Cards, CoffeeCard, Container, Tag } from './styles';
import { useState } from 'react';

export function Products () {
    const [count, setCount] = useState(0);

    return (
        <Container>
            <h2>Our coffees</h2>
            <Cards>
                <CoffeeCard>
                    <img src={expresso} alt='cup of expresso coffee'/>
                    <Tag>TRADICIONAL</Tag>
                    <h3>Expresso Tradicional</h3>
                    <p>O tradicional café feito com agua quente e graos moidos</p>
                    <Buy>
                        <p>RS 9,90</p>
                        <div className='wrapper'>
                            <button className='plusminus' onClick={() => setCount((count) => count - 1)}>-</button>
                            <p className='num'>{count}</p>
                            <button className='plusminus' onClick={() => setCount((count) => count + 1)}>+</button>
                        </div>
                        <button>
                            <ShoppingCartSimple size={16} weight="fill" color='#F3F2F2' />
                        </button>
                    </Buy>
                </CoffeeCard>


            </Cards>
        </Container>
    );
}