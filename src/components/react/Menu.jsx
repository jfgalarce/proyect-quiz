import InputMenu from "./InputMenu";
import ItempMenu from "./ItempMenu";

const Menu = ({items}) => {
  return (
    <div className="h-full w-96 bg-slate-200 p-2 flex flex-col gap-2">
      <button className="active:bg-slate-400 active:shadow-slate-700 hover:bg-slate-300 hover:shadow-slate-600 shadow-slate-500 rounded-xl h-10 px-2 text-xl shadow cursor-pointer">
        action
      </button>
      <InputMenu />
      <ItempMenu items={items} />
    </div>
  );
};
export default Menu;
