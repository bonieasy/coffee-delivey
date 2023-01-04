import logo from '../../assets/logo-coffe.svg';
import { MapPin, ShoppingCart } from "phosphor-react";
import { Actions, Container } from './styles';

export function Header() {
    return (
        <Container>
            <img src={logo} alt='a purple coffee cup with a rocket design and on the right side the name Coffe Delivery' />
            <Actions>
                <button className='location'>
                    <MapPin size={22} weight="fill" color='#8047F8' />
                    <span>Berlin, GE</span>
                </button>
                <button className='cart'>
                    <ShoppingCart size={22} weight="fill" color='#C47F17' />
                </button>
            </Actions>
        </Container>
    );
}