import Cup from '../../assets/coffee.svg';
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import { Container, Descriptions, Items } from '../../pages/Home/styles';

export function Banner () {
    return(
        <Container>
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
                        <span>Coffee arrives fresh to you3</span>
                    </div>
                    
                </Items>

            </Descriptions>
            <img src={Cup} alt="Cup of coffee" />
        </Container>
    );
}