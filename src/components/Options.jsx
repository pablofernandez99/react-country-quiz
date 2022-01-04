import { useContext } from "react"
import { quizContext } from "../context/quizBank"

const Options = ({ option, correct }) => {

    const { setScore, showResponse, setShowResponse } = useContext(quizContext)

    const computeAnswer = (option, correct) => {
        if (option === correct) {
            setScore(score => score + 1)
        }
    }

    if (showResponse && option === correct) {
        return (
            <button
                disabled={true}
                className="border-2 border-green-400 mb-5 text-left text-gray-600 py-3 px-2 rounded bg-green-400 text-white"
            >
                {option}
            </button>
        )
    }

    if (showResponse && option !== correct) {
        return (
            <button
                disabled={true}
                className="border-2 border-red-400 mb-5 text-left text-gray-600 py-3 px-2 rounded bg-red-400 text-white"
            >
                {option}
            </button>
        )
    }


    return (
        <button
            onClick={() => {
                computeAnswer(option, correct)
                setShowResponse(true)
            }}
            className="border-2 mb-5 text-left text-gray-600 py-3 px-2 rounded hover:bg-orange-400 hover:border-orange-400 hover:text-white"
        >
            {option}
        </button>
    )
}

export default Options