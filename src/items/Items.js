import React from 'react'

const Items = ({ items = [] }) => {

    if (items.length <= 0) {
        return <div>No items found</div>
    } else {
        return <div>
            <ol>
                {
                    items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ol>
        </div>
    }
}

export default Items;