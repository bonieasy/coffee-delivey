import { Bank, CreditCard, CurrencyEur, MapPinLine, Money } from 'phosphor-react';
import { Cart } from './Cart';
import { FormAddresse, Payment, Container, PaymentMethod, CheckoutContainer, Inputs } from './styles';


export function Checkout() {
    return(
        <CheckoutContainer>
        <Container>
            <h3>Complete your order</h3>

            <FormAddresse>
                <MapPinLine size={22} color='#C47F17' />
                <span>Addresse to delivery</span>
                <p>Informe o endere;o onde deseja receber seu pedido</p>

              
            <Inputs>
                <input className='zip_code' type='text' placeholder='ZIP Code' />
                <input className='street' type='text' placeholder='Street' />
                <input className='number' type='text' placeholder='Number' />
            </Inputs>

            </FormAddresse>

            <Payment>
                <div className='eur-icon'>
                    <CurrencyEur size={22} color='#8047F8' />
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
        <Cart />
        </CheckoutContainer>
    );
}