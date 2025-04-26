import { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";
import MainBody from "./MainBody";


const Main = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [myAnswers, setMyAnswers] = useState({});
  const [count, setCount] = useState(1);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getitems");
        setItems(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }
  , []);

  return (
    <div className="h-max w-full bg-slate-200">
      <div className="h-10 bg-slate-200">header</div>
      <div className="h-full  w-full grid grid-cols-[auto_1fr]">
        <Menu setQuestions={setQuestions}  count={count} setCount={setCount} items={items} setSelectedItem={setSelectedItem} selectedItem={selectedItem}  />
        <MainBody  questions={questions} setMyAnswers={setMyAnswers} myAnswers={myAnswers}  />
      </div>
    </div>
  );
};
export default Main;
