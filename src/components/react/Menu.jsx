import axios from "axios";
import InputMenu from "./InputMenu";
import ItempMenu from "./ItempMenu";

const Menu = ({items,setSelectedItem,selectedItem, count,setCount,setQuestions}) => {
  const handleClick = async () => {
    try {
      const params = {
        count: count,
        items: items.filter((item) => selectedItem[item.id]?.estado).map((item) => ({"id":item.id}))
      };
      const response = await axios.get("http://localhost:3000/api/getquestions", {
        params: {
          data: JSON.stringify(params),
        },
      });
      const data = response.data;
      console.log(data.res);
      setQuestions(data.res)
      
    } catch (error) {
      console.error("Error fetching questions:", error);
    }
  };
  return (
    <div className="h-full w-96 bg-slate-200 p-2 flex flex-col gap-2">
      <button
        onClick={handleClick}
      className="active:bg-slate-400 active:shadow-slate-700 hover:bg-slate-300 hover:shadow-slate-600 shadow-slate-500 rounded-xl h-10 px-2 text-xl shadow cursor-pointer">
        action
      </button>
      <InputMenu count={count} setCount={setCount}  />
      <ItempMenu items={items} setSelectedItem={setSelectedItem} selectedItem={selectedItem} />
    </div>
  );
};
export default Menu;
