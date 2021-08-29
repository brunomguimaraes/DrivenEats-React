import React from 'react'


export default (props) => {
    const { name, description, img, price } = props.item

    const [ selectedItem, setSelectedItem ] = props.selectInfo

    const itemIndex = props.itemIndex

    const selectOrUnselectItem = () => {
        if (itemIndex === selectedItem.index) {
            setSelectedItem({
                index: -1,
                qtd: 0
            })
            return
        } 

        setSelectedItem({
            index: itemIndex,
            qtd: 1
        })
    }

    const handleClick = () => {
        selectOrUnselectItem()
    }

    const removeItem = (event) => {
        event.stopPropagation()

        if (selectedItem.qtd === 1) {
            setSelectedItem({ index: -1, qtd: 0})
            return
        }
        
        setSelectedItem({
            index: selectedItem.index,
            qtd: selectedItem.qtd - 1
        })
        
    }

    const addItem = (event) => {
        event.stopPropagation()

        setSelectedItem({
            index: selectedItem.index,
            qtd: selectedItem.qtd + 1
        })
    }

    return (
        <div className={`item ${selectedItem.index === itemIndex ? 'selecionado': ''}`} onClick={handleClick}>
            <img src={img} />
            <p class="nome-item">{name}</p>
            <p class="descricao-item">{description[0]}</p>
            <p class="descricao-item">{description[1]}</p>
            <p class="preco">{price}</p>
            <span className='quantidade-wrapper'>
                <span className="menos" onClick={removeItem}>-</span>
                <span className="quantidade">{selectedItem.qtd}</span>
                <span className="mais" onClick={addItem}>+</span>
            </span>
        </div>
    )
}