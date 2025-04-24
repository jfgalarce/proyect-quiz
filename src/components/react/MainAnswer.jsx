import clsx from 'clsx';
import { use, useEffect, useState } from 'react';
const MainAnswer = ({ answer, setMyAnswers, ok, question ,myAnswers }) => {
  const [temp, setTemp] = useState(1);
  useEffect(() => {
    if (myAnswers[question]?.MyAnswer === answer['id'] && myAnswers[question]?.MyAnswer === ok) {
      setTemp(2);
    } else if (myAnswers[question]?.MyAnswer === answer['id'] && myAnswers[question]?.MyAnswer !== ok) {
      setTemp(3);
    }else{
      setTemp(1);
    }
  },[myAnswers, question, answer, ok])
  const handerClick = () => {    
      setMyAnswers((prev) => {
        return {
          ...prev,
          [question]: {
            ok,
            MyAnswer: answer['id'],
          },
        };
      });
    
  };
  return (
    <div
      onClick={handerClick}
      className={clsx('cursor-pointer h-20 rounded-lg  shadow flex items-center justify-center',{
        'active:bg-slate-400 active:shadow-slate-700 hover:bg-slate-300 hover:shadow-slate-600 shadow-slate-500': temp === 1,
        'active:bg-green-400 active:shadow-green-700 hover:bg-green-300 hover:shadow-green-600 shadow-green-500 bg-green-200': temp === 2,
        'active:bg-red-400 active:shadow-red-700 hover:bg-red-300 hover:shadow-red-600 shadow-red-500 bg-red-200': temp === 3
      })}
    >
      {answer['answer']}
    </div>
  );
};
export default MainAnswer;
