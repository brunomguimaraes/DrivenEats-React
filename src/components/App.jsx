import React, { useState } from 'react'
import TopBar from './TopBar'
import Footer from './Footer'
import Section from './Section'


const listFood = [
    {
        img: 'assets/batata_recheada.jpg',
        name: 'Batata recheada',
        description: ['Batata com carne', 'e queeeijo!'],
        price: 'R$ 22,60'
    },
    {
        img: 'assets/miojo.jpg',
        name: 'Miojo',
        description: ['Prejudica a saúde', 'mas salva vidas'],
        price: 'R$ 2,90'
    },
    {
        img: 'assets/frango_yin_yang 1.png',
        name: 'Frango Yin Yang',
        description: ['Um pouco de batata,', 'um pouco de salada'],
        price: 'R$ 17,90'
    }
]

const listDrink = [
    {
        img: 'assets/pureza.jpg',
        name: 'Pureza',
        description: ['Melhor que Coca,', 'acompanha coxinha'],
        price: 'R$ 6,99'
    },
    {
        img: 'assets/laranjinha.png',
        name: 'Laranjinha',
        description: ['Néctar dos Deuses,', 'produzida na serra'],
        price: 'R$ 6,50'
    },
    {
        img: 'assets/coca.png',
        name: 'Coca',
        description: ['Desculpe,', 'não temos Pepsi'],
        price: 'R$ 13,49'
    }
]

const listDessert = [
    {
        img: 'assets/sorvete.jpg',
        name: 'Sorvete com Negresco',
        description: ['É só um sorvete', 'com Negresco'],
        price: 'R$ 32,65'
    },
    {
        img: 'assets/brownie.jpg',
        name: 'Brownie do Pablo',
        description: ['Brownie mano,', 'brownie!'],
        price: 'R$ 4,00'
    },
    {
        img: 'assets/aerochurros.jpg',
        name: 'Aerochurros',
        description: ['É um churros com', 'bastante chocolate'],
        price: 'R$ 11,90'
    }
]

export default () => {

    const [ selectedFood, setSelectedFood ] = useState({index: -1, qtd: 0})
    const [ selectedDrink, setSelectedDrink ] = useState({index: -1, qtd: 0})
    const [ selectedDessert, setSelectedDessert ] = useState({index: -1, qtd: 0})

    return (
        <>
            <TopBar />

            <div class="conteudo-principal">
                <Section
                    subSectionName='comida'
                    subSectionTitle='Primeiro, seu prato'
                    itemList={listFood}
                    selectInfo={[selectedFood, setSelectedFood]}
                />
                <Section
                    subSectionName='bebida'
                    subSectionTitle='Agora, sua bebida'
                    itemList={listDrink}
                    selectInfo={[selectedDrink, setSelectedDrink]}
                />
                <Section
                    subSectionName='sobremesa'
                    subSectionTitle='Por fim, sua sobremesa'
                    itemList={listDessert}
                    selectInfo={[selectedDessert, setSelectedDessert]}
                />
            </div>

            <Footer />

            <div class="modal oculto">
                <div class="confirmar-pedido">
                    <p>Confirme seu pedido</p>
                    <span>
                        <span class="comida-selecionada">Frango Yin Yang</span>
                        <span class="preco-comida-selecionada">14,90</span>
                    </span>
                    <span>
                        <span class="bebida-selecionada">Coquinha gelada</span>
                        <span class="preco-bebida-selecionada">4,90</span>
                    </span>
                    <span>
                        <span class="sobremesa-selecionada">Pudim</span>
                        <span class="preco-sobremesa-selecionada">7,90</span>
                    </span>
                    <span class="ultimo-span">
                        <span>Total</span>
                        <span class="preco-total">R$ 27,70</span>
                    </span>
                    <button class="tudo-certo" onclick="fecharPedido()">Tudo certo, pode pedir!</button>
                    <button class="cancelar" onclick="voltarParaPaginaSelecao()">Cancelar</button>
                </div>
            </div>
        </>
    )
}