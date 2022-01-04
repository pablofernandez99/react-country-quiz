import { useContext } from 'react'
import QuestionBox from './components/QuestionBox'
import Results from './components/Results'

import './App.css'
import QuizContextProvider, { quizContext } from './context/quizBank'

function Quiz() {

  const { quizBank, amount } = useContext(quizContext)

  return (
    <div className='container mx-auto'>
      {quizBank.length > 0 && amount < 5 && (
        <QuestionBox />
      )}
      {amount === 5 && (
        <Results />
      )} 
    </div>
  )
}

function App() {
  return (
    <QuizContextProvider>
      <Quiz />
    </QuizContextProvider>
  )
}

export default App
