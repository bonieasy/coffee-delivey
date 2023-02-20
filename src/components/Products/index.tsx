import { ShoppingCartSimple } from "phosphor-react";
import { AllTags, Buy, Cards, CoffeeCard, Container, Tag } from './styles';
import { useState } from 'react';
import JsonData from '../../data/data.json';
import { NavLink } from "react-router-dom";


export function Products () {
    const [count, setCount] = useState(0); 

    const decrease = () => {
        if (count > 0){
        setCount((count) => count - 1)
        } 
    };

    return (
        <Container>
            <h2>Our coffees</h2>
            <Cards>
                {JsonData.map((coffeeItem) => {
                    return(
                        <CoffeeCard>
                            <img src={coffeeItem.image} alt={coffeeItem.alt} />

                            <AllTags>

                                {coffeeItem.tag.map((tag, index) => (
                                    <Tag key={index}>{tag}</Tag>
                                ))}
                            </AllTags>
                            
                            <h3>{coffeeItem.name}</h3>
                            <p>{coffeeItem.description}</p>
                            <Buy>
                                <p>€{coffeeItem.price}</p>
                                <div className='wrapper'>
                                    <button className='plusminus' onClick={decrease}>-</button>
                                    <p className='num'>{count}</p>
                                    <button className='plusminus' onClick={() => setCount((count) => count + 1)}>+</button>
                                </div>
                                <NavLink to="/checkout">
                                    <button>
                                        <ShoppingCartSimple size={16} weight="fill" color='#F3F2F2' />
                                    </button>
                                </NavLink>
                            </Buy>
                        </CoffeeCard>
                    )

                })}
                
            </Cards>
        </Container>
    );

}