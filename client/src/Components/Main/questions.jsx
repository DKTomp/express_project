import React, { useState } from "react"
import axios from "axios"
import NavBar from "./Header"
import './questions.css'

function Questions () {
    const [displayText, setDisplayText] = useState([{content: "Select a category to view it's questions"}])
    const [topic, setTopic] = useState('')

    async function changetext (category) {
        const response = await axios.get(`http://localhost:4000/main/${category}`)
        console.log (response.data)
        setDisplayText(response.data)
        if (category === "severe") {
            setTopic("Severe Weather")
        } else if (category === "hurricane")  {
            setTopic("Hurricanes")
        } else if (category === "winter") {
            setTopic("Winter Weather")
        }
        console.log(displayText)
        }

    return (
        <>
            <NavBar />
            <div className="button-container mb-4">
                <button className="button image1 rounded-4 mx-3" onClick={() => changetext('severe')}>Severe Weather</button>
                <button className="button image2 rounded-4 mx-3" onClick={() => changetext('hurricane')}>Hurricanes</button>
                <button className="button image3 rounded-4 mx-3" onClick={() => changetext('winter')}>Winter Weather</button>
            </div>
            <h1 className="topic">{topic}</h1>
            <div className="text-container rounded-3 pb-1">
                {displayText.map ((question) => 
                    <>
                        <div className={question.description ? 'question-container mx-5 mb-3 rounded-2' : 'initial-container'}>
                            <p className="mb-3 question" >{question.description}</p>
                            <div>{question.description ? <hr/> : ''}</div>
                            <p className="mb-3 answer">{question.content}</p>
                        </div>
                    </>
                )}
            </div>  
        </>
    )
}

export default Questions