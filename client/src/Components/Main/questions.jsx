import React, { useEffect, useState } from "react"
import axios from "axios"
import NavBar from "./Header"
import './questions.css'

function Questions () {
    const [displayText, setDisplayText] = useState([{content: "Select a category to view it's questions"}])
    const [categories, setCategories] = useState([])

    useEffect(() => {
        async function FetchCategory () {
            let response = await axios.get ("http://localhost:4000/main/categories")
            setCategories (response.data)
        }
        FetchCategory()
    }, [])

    async function changetext (e) {
        const value = e.target.value
        const response = await axios.get(`http://localhost:4000/main/categories/${value}`)
        setDisplayText(response.data)
    }

    return (
        <>
            <NavBar />

            <div className="button-container mb-4 mx-4 rounded-2">
                {categories.map ((cat) =>
                    <>
                        <button className="button rounded-2" value = {cat.categoryID} onClick={changetext}>{cat.name}</button>
                    </>
                )}
            </div>
            <h1 className="topic">{displayText.length > 1 ? displayText[0].name : ''}</h1>
            <div id='1' className="text-container rounded-3 pb-1">
                {displayText.map ((question) => 
                    <>
                        <div className={question.description ? 'question-container mx-5 mb-3 rounded-2' : 'initial-container'}>
                            <p className="mb-3 question" >{question.description ? question.description : ''}</p>
                            <div>{question.description ? <hr/> : ''}</div>
                            <p className="mb-3 answer">{question.content ? question.content : ''}</p>
                        </div>
                    </>
                )}
            </div>  
        </>
    )
}

export default Questions