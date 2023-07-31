import { useState } from "react"
import data from "./data.js"
import Questions from "./Questions"

function App() {
  const [questions, setQuestions] = useState(data)
  return (
    <main>
      <Questions questions={questions} />
    </main>
  )
}

export default App
