import { Trash } from 'phosphor-react';
import { Container, Products, SelectedItems, Values } from './styles';
import coffee from '../../../assets/Type=Expresso.svg'

export function Cart () {
    return (
        <Container>
            <h3>Caffes selecionados</h3>

            <SelectedItems>

                <Products>
                    <img src={coffee} alt='cup of coffee' />
                    <div className='details'>
                        <span>Expresso Tradicional</span>
                        <div className='buttons'>
                            <div className='wrapper'>
                                <button className='plusminus'>-</button>
                                <input type='number' className='num' />
                                <button className='plusminus'>+</button>
                            </div>
                            <button className='trash-button'>
                                <Trash size={16} color='#8047F8' />
                                remover 
                            </button>
                        </div>
                    </div>
                    <span>€ 3,45</span>
                    
                </Products>

                <Products>
                    <img src={coffee} alt='cup of coffee' />
                    <div className='details'>
                        <span>Expresso Tradicional</span>
                        <div className='buttons'>
                            <div className='wrapper'>
                                <button className='plusminus'>-</button>
                                <input type='number' className='num' />
                                <button className='plusminus'>+</button>
                            </div>
                            <button className='trash-button'>
                                <Trash size={16} color='#8047F8' />
                                remover 
                            </button>
                        </div>
                    </div>
                    <span>€ 3,45</span>
                    
                </Products>

                <Values>
                    <div className='items'>
                        <span>Total de itens</span>
                        <span>€ 3,45</span>
                    </div>

                    <div className='delivery'>
                        <span>Entrega</span>
                        <span>€ 2</span>
                    </div>

                    <div className='total'>
                        <span>Total</span>
                        <span>€ 5,45</span>
                    </div>

                    <button>Confirmar pedido</button>
                </Values>

            </SelectedItems>

        </Container>
    );
}