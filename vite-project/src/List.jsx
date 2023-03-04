import React, { useEffect, useState } from 'react'

const List = ({ getItems }) => {
    const [items, setitems] = useState([])
    useEffect(() => {
        setitems(getItems())
        console.log("Updating Items")
    }, [getItems])

    return (
        <div>
            List
            {
                items.map((item, i) => {
                    return <div key={i}>{item}</div>
                })
            }

        </div>
    )
}

export default List