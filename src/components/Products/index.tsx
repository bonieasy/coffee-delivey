import expresso from '../../assets/Type=Expresso.svg';
import { ShoppingCartSimple } from "phosphor-react";
import { Buy, Cards, CoffeeCard, Container, Tag } from './styles';

export function Products () {


// function handleMinus() {
//         this.value--;  
//       }

//       handlePlus() {
//         this.value++;    
//       }
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
                            <button className='plusminus'>-</button>
                            <input type='number' className='num' />
                            <button className='plusminus'>+</button>
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