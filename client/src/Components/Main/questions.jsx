import React, { useState } from "react"
import axios from "axios"
import NavBar from "../Header"
import './questions.css'

function Questions () {
    const [displayText, setDisplayText] = useState([{content: "Select a category to view it's questions"}])

    async function changetext (category) {
        const response = await axios.get(`http://localhost:4000/main/${category}`)
        console.log (response.data)
        setDisplayText(response.data)
        console.log(displayText)
        }

    return (
        <>
            <NavBar />
            <div className="main-container">
                <div className="button-container">
                    <button className="button" onClick={() => changetext('severe')}>Severe Weather</button>
                    <button className="button" onClick={() => changetext('hurricane')}>Hurricanes</button>
                    <button className="button" onClick={() => changetext('winter')}>Winter Weather</button>
                </div>
                <div className="questions-container">
                    {displayText.map ((question) => 
                        <div className="mb-3">{question.content}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Questions