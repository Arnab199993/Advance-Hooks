import React, { useMemo, useState } from 'react'

const Usememo = () => {
    const [add, setadd] = useState(0)
    const [minus, setminus] = useState(100)
    const addition = (() => {
        setadd(add + 1)
    })
    const subs = (() => {
        setminus(minus - 1)
    })
    const multiplication = useMemo(function multiply() {
        console.log("***********************")
        return add * 10
    }, [add])

    // const multiply = (() => {
    //     console.log("***********************")   //Weird React
    //     return add * 10
    // })

    return (
        <div style={{ color: "black" }}>
            Usememo <br></br>
            {/* {multiply()}<br></br> */}
            {multiplication}<br></br>
            <button onClick={addition} style={{ backgroundColor: "blue", color: "white" }}>
                Addition
            </button>
            <span>{add}</span><br></br><br></br>
            <button onClick={subs} style={{ backgroundColor: "blue", color: "white" }}>
                Substraction
            </button>
            <span>{minus}</span>
        </div>
    )
}

export default Usememo