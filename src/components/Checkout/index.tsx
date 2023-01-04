import { Bank, CreditCard, CurrencyEur, MapPinLine, Money } from 'phosphor-react';
import { FormAddresse, Payment, Container, PaymentMethod } from './styles';


export function Addresse() {
    return(
        <Container>
            <h3>Complete your order</h3>

            <FormAddresse>
                <MapPinLine size={20} color='#C47F17' />
                <span>Addresse to delivery</span>
                <p>Informe o endere;o onde deseja receber seu pedido</p>

                <input type='text' placeholder='ZIP Code' />
                <input type='text' placeholder='Street' />
                <input type='text' placeholder='Number' />
            </FormAddresse>

            <Payment>
                <div className='eur-icon'>
                    <CurrencyEur size={20} color='#8047F8' />
                    <span>Payment</span>
                </div>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                

                <PaymentMethod>
                    <div className='card-tag'>
                        <CreditCard size={20} color='#8047F8' />
                        <span>Credit card</span>
                    </div>

                    <div className='card-tag'>
                        <Bank size={20} color='#8047F8' />
                        <span>Debit card</span>
                    </div>

                    <div className='card-tag'>
                        <Money size={20} color='#8047F8' />
                        <span>Money</span>
                    </div>

                </PaymentMethod>
            </Payment>

        </Container>
    );
}