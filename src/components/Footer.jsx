import React from 'react'
import { Link } from 'react-router-dom'

export default ({ isOrderReady }) => {
    const msgOrderReady = <>Fechar pedido</>
    const msgOrderNotReady = <>Selecione os 3 itens<br />para fechar o pedido</>

    return (
        <div class="rodape">
        <Link
            to='/order'
            className={`botao-fechar ${isOrderReady ? 'botao-verde' : ''}`}
            style={isOrderReady ? { fontWeight: 700 } : { pointerEvents: 'none' }}
            >
            <span class="texto-botao-fechar">{isOrderReady ? msgOrderReady : msgOrderNotReady}</span>
        </Link>
    </div>
    )
}