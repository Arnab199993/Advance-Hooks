import React, { useRef, useState } from 'react'

const Useref = () => {
    const [name, setname] = useState("Arnab")
    // const [colour, setcolor] = useState("")
    const refElement = useRef()
    console.log(refElement)

    const Reset = (() => {
        setname("")
        refElement.current.focus()
    })
    const HandleInput = (() => {
        refElement.current.style.color = "blue"
        refElement.current.value = "Dutta"
        // setcolor("blue")
    })
    return (
        <div>
            Useref<br></br>
            <input ref={refElement} type={"text"} value={name} onChange={((e) => setname(e.target.value))} />  {/*style={{ color: colour }} */}
            {/* <input ref={refElement} type={"text"} value={name} onChange={((e) => setname(e.target.value))} style={{ color: colour ? "blue" : "" }} >
            </input> */}
            <button style={{ color: "whitesmoke", backgroundColor: "blue", marginLeft: "15px" }} onClick={Reset}>
                Reset
            </button>
            <button onClick={HandleInput} style={{ color: "whitesmoke", backgroundColor: "blue", marginLeft: "15px" }}>
                Handle Input
            </button>
            {/* <button onClick={HandleInput} style={{ color: "whitesmoke", backgroundColor: "blue", marginLeft: "15px" }} >
                Handle Input
            </button> */}
            {/* <button onClick={(() => setcolor(""))} style={{ color: "whitesmoke", backgroundColor: "blue", marginLeft: "15px" }}>
                Back to normal
            </button> */}
        </div>
    )
}

export default Useref