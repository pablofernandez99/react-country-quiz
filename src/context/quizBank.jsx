import { createContext, useState, useEffect } from 'react'
import quizServices from '../quizServices/questions'


export const quizContext = createContext()

const QuizContextProvider = ({ children }) => {

    const [quizBank, setQuizBank] = useState([])
    const [score, setScore] = useState(0)
    const [amount, setAmount] = useState(0)
    const [showResponse, setShowResponse] = useState(false)

    const getQuestions = () => {
        quizServices().then(question => {

            if (question[0].id === quizBank[0]?.id) {
                return getQuestions()
            } else {
                setQuizBank(question)
            }

        })
    }

    useEffect(() => {
        getQuestions()
    }, [])


    return (
        <quizContext.Provider value={{ quizBank, getQuestions, score, setScore, amount, setAmount, showResponse, setShowResponse }}>
            {children}
        </quizContext.Provider>
    )
}

export default QuizContextProvider