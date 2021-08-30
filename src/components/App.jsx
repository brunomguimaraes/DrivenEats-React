import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom'
import TopBar from './TopBar'
import Footer from './Footer'
import Section from './Section'
import ConfirmOrder from './ConfirmOrder'


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

const listCategory = [
    {
        name: 'comida',
        title: 'Primeiro, seu prato',
    },
    {
        name: 'bebida',
        title: 'Agora, sua bebida'
    },
    {
        name: 'sobremesa',
        title: 'Por fim, sua sobremesa'
    }
]

export default () => {

    const [selectedFood, setSelectedFood] = useState({ index: -1, qtd: 0 })
    const [selectedDrink, setSelectedDrink] = useState({ index: -1, qtd: 0 })
    const [selectedDessert, setSelectedDessert] = useState({ index: -1, qtd: 0 })

    const [isOrderReady, setIsOrderReady] = useState(false)

    const order = [selectedFood, selectedDrink, selectedDessert]
    const setOrder = [setSelectedFood, setSelectedDrink, setSelectedDessert]

    const categoryContent = [listFood, listDrink, listDessert]

    useEffect(() => order.filter(i => i.qtd > 0).length < 3 ? setIsOrderReady(false) : setIsOrderReady(true), order)

    return (

        <Router>
            <TopBar />

            <Switch>
                <Route path='/order'>
                    <ConfirmOrder
                        order={order}
                        foods={listFood}
                        drinks={listDrink}
                        desserts={listDessert}
                    />
                </Route>

                <Route path='/'>
                    <div class="conteudo-principal">
                        {
                            listCategory.map((category, index) => {
                                return (
                                    <Section
                                        subSectionName={category.name}
                                        subSectionTitle={category.title}
                                        itemList={categoryContent[index]}
                                        selectInfo={[order[index], setOrder[index]]}
                                        key={index}
                                    />
                                )
                            })
                        }
                    </div>

                    <Footer isOrderReady={isOrderReady} />
                </Route>
            </Switch>




        </Router>
    )
}