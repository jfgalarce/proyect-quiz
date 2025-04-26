import { useEffect, useState } from "react";
import clsx from "clsx";
const ItempMenu = ({ items,setSelectedItem ,selectedItem }) => {
      
  useEffect(() => {
    setSelectedItem(
      items.reduce((acc, item) => {
        acc[item.id] = { estado: false };
        return acc;
      }, {})
    );
  }, [items, setSelectedItem]);
  
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => {
        return (
          <div
            onClick={() => {
              setSelectedItem((prev) => {
                return {
                  ...prev,
                  [item.id]: { estado: !prev[item.id]?.estado },
                };
              });
            }}
            className={clsx(
              "flex items-center justify-center active:bg-slate-400 active:shadow-slate-700 hover:bg-slate-300 hover:shadow-slate-600 shadow-slate-500 rounded-xl  px-2 text-sm shadow cursor-pointer",
              selectedItem[item.id]?.estado
                ? "bg-slate-400 shadow-slate-700"
                : "bg-slate-200 shadow-slate-500"
            )}
            key={item.id}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};
export default ItempMenu;
