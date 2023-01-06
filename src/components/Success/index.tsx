import success from '../../assets/Illustration.svg';
import { CurrencyEur, MapPin, Timer } from "phosphor-react";
import { Container } from './styles';

export function Success() {
    return(
        <Container>
            <h1>Uhu! Pedido confirmado</h1>
            <span>Agora é só aguardar que logo o cafe chegará até voce</span>

            <div className='order-info'>
                <div className='local'>
                    <div className='map'>
                        <MapPin size={16} color="#fafafa" weight="fill" />
                    </div>
                    <span>Entrega em 
                        <strong>Dirschauer Str. 10</strong>
                    </span>
                </div>

                <div>
                    <div className='timer'>
                        <Timer size={16} color="#fafafa" weight="fill" />
                    </div>
                </div>

                <div>
                    <div className='euro'>
                        <CurrencyEur size={16} color="#fafafa" weight="fill" />
                    </div>
                </div>
            </div>

            
        </Container>
    );
}