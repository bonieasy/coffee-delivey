import Cup from '../../assets/coffee.svg';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Container, Descriptions, Items, Content } from './styles';
import { Products } from '../../components/Products';

export function Home () {
    return(
        <Container>
            <Content>
            <Descriptions>
                <h1>Find the perfect coffee for any time of day</h1>
                <span className='subtitle'>With Coffee Delivery you receive your coffee wherever you are, at any time</span>
                <Items>
                    <div>
                        <a className='cart'>
                        <ShoppingCart size={16} weight="fill" color='#FAFAFA' />
                        </a>
                        <span>Easy and secure purchase</span>
                    </div>

                    <div>
                        <a className='package'>
                            <Package size={16} weight="fill" color='#FAFAFA' />
                        </a>
                        <span>Packaging keeps coffee intact</span>
                    </div>

                    <div>
                        <a className='timer'>
                            <Timer size={16} weight="fill" color='#FAFAFA' />
                        </a>
                        <span>Fast delivery and tracked</span>
                    </div>
                    
                    <div>
                        <a className='coffee'>
                            <Coffee size={16} weight="fill" color='#FAFAFA' />
                        </a>
                        <span>Coffee arrives fresh to you</span>
                    </div>
                    
                </Items>
                
            </Descriptions>
            <img className='intro-coffee' src={Cup} alt="Cup of coffee" />
            </Content>
            <Products/>
            

            
        </Container>
    );
} 