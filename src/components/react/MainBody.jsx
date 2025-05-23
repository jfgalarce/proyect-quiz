import { useState } from "react";
import MainAnswer from "./MainAnswer"
import MainQuestion from "./MainQuestion"
import MainPag from "./MainPag";

const MainBody = ({items,questions,setMyAnswers,myAnswers}) => {
  const [question, setQuestion] = useState(0);
  if(questions.length === 0) {
    return (
      <div className="h-full w-full p-2 bg-slate-200 flex flex-col gap-2 justify-between">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-2xl font-bold">No hay preguntas</div>
        </div>
      </div>
    )
  }
  return (
    <div className="h-full w-full p-2 bg-slate-200 flex flex-col gap-2 justify-between">
      <MainQuestion question={questions[question]['question']} />
      <div className="w-full grid grid-cols-2 gap-2">
      {
        questions[question]['answers'].map((answer) => {
          return (
            <MainAnswer key={answer.id} question={question} answer={answer} setMyAnswers={setMyAnswers} ok={questions[question]['ok']} myAnswers={myAnswers}/>
          )
        })
      }
      </div>
      <MainPag pag={questions.length} setQuestion={setQuestion} question={question} />
    </div>
  )
}
export default MainBody