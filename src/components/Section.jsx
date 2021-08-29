import React, {useState} from 'react'
import Item from './Item'


export default ({ subSectionName, subSectionTitle, itemList, selectInfo}) => {

    const [ selectedItem, setSelectedItem ] = selectInfo

    const selectItem = numItem => setSelectedItem(numItem)

    return (
        <div class={`subsecao ${subSectionName}`}>
            <p class="titulo-subsecao">{subSectionTitle}</p>
            <div class="wrapper-item">
                {
                    itemList.map((item, index) => (
                        <Item item={item} key={index} itemIndex={index} selectInfo={[selectedItem, setSelectedItem]}/>
                    ))
                }
            </div>
        </div>
    )
}