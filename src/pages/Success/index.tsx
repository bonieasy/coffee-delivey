import illustration from '../../assets/Illustration.svg';
import { CurrencyEur, MapPin, Timer } from "phosphor-react";
import { Container, Content } from './styles';

export function Success() {
    return(
        <Container>
            <Content>
                <h1>Uhu! Pedido confirmado</h1>
                <span>Agora é só aguardar que logo o cafe chegará até voce</span>
 
            <div className='order-info'>
                <div className='local'>
                    <div className='map'>
                        <MapPin size={16} color="#fafafa" weight="fill" />
                    </div>
                    <span>Entrega em 
                        <strong>Dirschauer Str. 10</strong> <br/>
                        Friedrichshain, Berlin
                    </span>
                </div>

                <div className='clock'>
                    <div className='timer'>
                        <Timer size={16} color="#fafafa" weight="fill" />
                    </div>
                    <span>Previsao de entrega em</span>
                    
                </div>

                <div className='money'>
                    <div className='euro'>
                        <CurrencyEur size={16} color="#fafafa" weight="fill" />
                    </div>
                    <span>Pagamento na entrega</span>
                    
                </div>
            </div>
            </Content>


        <img src={illustration} alt='gghg' />

        </Container>
    );
}
