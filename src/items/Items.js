import React from 'react'

const Items = ({ items = [] }) => {

    const [listOfItems, itemsUpdator] = React.useState(items)

    if (listOfItems.length <= 0) {
        return <div>No items found</div>
    } else {
        return <div>
            <ol>
                {
                    listOfItems.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>
        </div>
    }
}

export default Items;