const MainPag = ({ pag, setQuestion, question }) => {
  return <div className="flex gap-2 items-center w-full justify-center">
    <button
      className=" p-2 rounded-lg shadow-slate-500 shadow"
      onClick={() => {
        if (question > 0) {
          setQuestion(question - 1);
        }
      }}
    >
      Anterior
    </button>
    <div className="">
      {question + 1} de {pag}
    </div>
    <button
      className="p-2 rounded-lg shadow-slate-500 shadow"
      onClick={() => {
        if (question < pag - 1) {
          setQuestion(question + 1);
        }
      }}
    >
      Siguiente
    </button>
  </div>;
};
export default MainPag;
