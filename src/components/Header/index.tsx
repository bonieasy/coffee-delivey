import logo from '../../assets/logo-coffe.svg';
import { MapPin, ShoppingCart } from "phosphor-react";
import { Actions, Container } from './styles';
import { NavLink } from 'react-router-dom';

export function Header() {
    return (
        <Container>
            <NavLink to="/">
                <img src={logo} alt='a purple coffee cup with a rocket design and on the right side the name Coffe Delivery' />
            </NavLink>
            <Actions>
                <button className='location'>
                    <MapPin size={22} weight="fill" color='#8047F8' />
                    <span>Berlin, GE</span>
                </button>

                <NavLink to="/checkout">
                    <button className='cart'>
                        <ShoppingCart size={22} weight="fill" color='#C47F17' />
                    </button>
                </NavLink>
            </Actions>
        </Container>
    );
}