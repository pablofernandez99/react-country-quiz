import { useContext } from 'react'
import { quizContext } from '../context/quizBank'

import Options from './Options'

import world from '../assets/images/world.svg'

const QuestionBox = () => {

    const { quizBank, getQuestions, setAmount, showResponse, setShowResponse } = useContext(quizContext)

    const nextQuestion = () => {
        getQuestions()
        setAmount(amount => amount < 5 ? amount + 1 : 5)
        setShowResponse(false)
    }


    return (
        <>
            <div className="bg-white p-8 mx-auto w-96 rounded rounded-xl relative">
                <img src={world} alt="world" className="w-32 absolute -top-12 right-4" />
                {quizBank.map(({ id, question, answers, correct }) => (
                    <div key={id}>
                        <p className="font-bold text-gray-700 text-xl mb-5">{question}</p>
                        <div className="flex flex-col">
                            {answers.map((option, index) => (
                                <Options key={index} option={option} correct={correct} />
                            ))}
                        </div>
                    </div>
                ))}
                <div className='flex justify-end'>
                    <button
                        onClick={nextQuestion}
                        disabled={!showResponse}
                        className='text-gray-700  border border-gray-700 rounded py-2 px-3 hover:bg-orange-400 hover:border-orange-400 disabled:opacity-25 disabled:cursor-not-allowed'>
                        Next
                    </button>
                </div>
            </div>
        </>
    )
}

export default QuestionBox