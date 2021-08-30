import React from 'react'
import { Link } from 'react-router-dom'

export default ({ order, foods, drinks, desserts }) => {

    const celNumber = '5548984658779'

    // Seta o index como 0 caso seja -1
    order = order.map(({ index, qtd }) => index === -1 ? { index: 0, qtd } : { index, qtd })

    const [
        { index: foodIndex, qtd: foodQtd },
        { index: drinkIndex, qtd: drinkQtd },
        { index: dessertIndex, qtd: dessertQtd }
    ] = order


    const foodName = foods[foodIndex].name
    const drinkName = drinks[drinkIndex].name
    const dessertName = desserts[dessertIndex].name

    const foodPrice = foods[foodIndex].price
    const drinkPrice = drinks[drinkIndex].price
    const dessertPrice = desserts[dessertIndex].price

    const orderItems = [
        {
            name: foodName,
            qtd: foodQtd,
            price: foodPrice
        },
        {
            name: drinkName,
            qtd: drinkQtd,
            price: drinkPrice
        },
        {
            name: dessertName,
            qtd: dessertQtd,
            price: dessertPrice,
        }
    ]

    const sanitizeNumber = num => Number(num.replace('R$ ', '').replace(',', '.'))

    const sumTotal = order => {
        const total = order.reduce((sum, {qtd, price}) => sum + qtd * sanitizeNumber(price), 0)

        return 'R$ ' + total.toFixed(2).replace('.', ',')
    }

    const buildOrderMessage = (total) => {

        const mensagemPedido = `Olá, gostaria de fazer o pedido:
        - Prato: *${foodName}* ${foodQtd > 1 ? '('+foodQtd+'x)' : ''}
        - Bebida: *${drinkName}* ${drinkQtd > 1 ? '('+drinkQtd+'x)' : ''}
        - Sobremesa: *${dessertName}* ${dessertQtd > 1 ? '('+dessertQtd+'x)' : ''}
        Total: *${total.replace(',', '.')}*
        
        `
    
        return mensagemPedido
    }

    function sendWhatsAppMessage(celNumber, message) {

        const urlBase = `https://wa.me/${celNumber}?text=`
    
        const urlComplete = urlBase + encodeURIComponent(message)
    
        window.open(urlComplete)
    }

    const handleSendMessage = () => {
        const message = buildOrderMessage(sumTotal(orderItems))

        sendWhatsAppMessage(celNumber, message)
    }

    return (
        <div class="modal">
            <div class="confirmar-pedido">
                <p>Confirme seu pedido</p>

                {
                    orderItems.map(({ name, qtd, price }, index) => {
                        return (
                            <span key={index}>
                                <span>{`(${qtd}x) ${name}`}</span>
                                <span>{price.replace('R$ ', '')}</span>
                            </span>
                        )
                    })
                }

                <span class="ultimo-span">
                    <span>Total</span>
                    <span class="preco-total">{sumTotal(orderItems)}</span>
                </span>
                <button class="tudo-certo" onClick={handleSendMessage}>Tudo certo, pode pedir!</button>
                <Link to='/' class="cancelar">Cancelar</Link>
            </div>
        </div>
    )
}

