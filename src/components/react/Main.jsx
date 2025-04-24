import { useState } from "react";
import Menu from "./Menu";
import MainBody from "./MainBody";

const Main = () => {
  const [myAnswers, setMyAnswers] = useState({});
  const [questions, setQuestions] = useState([
    {
      cod: 1,
      ok: 1,
      question: "¿Pregunta 1?",
      answers: [
        { id: 1, answer: "Respuesta 1" },
        { id: 2, answer: "Respuesta 2" },
        { id: 3, answer: "Respuesta 3" },
        { id: 4, answer: "Respuesta 4" },
      ],
    },{
      cod: 2,
      ok: 3,
      question: "¿Pregunta 2?",
      answers: [
        { id: 1, answer: "Respuesta 11" },
        { id: 2, answer: "Respuesta 22" },
        { id: 3, answer: "Respuesta 33" },
        { id: 4, answer: "Respuesta 44" },
      ],
    }
  ]);
  return (
    <div className="h-max w-full bg-slate-200">
      <div className="h-10 bg-slate-200">header</div>
      <div className="h-full  w-full grid grid-cols-[auto_1fr]">
        <Menu />
        <MainBody questions={questions} setMyAnswers={setMyAnswers} myAnswers={myAnswers}  />
      </div>
    </div>
  );
};
export default Main;
