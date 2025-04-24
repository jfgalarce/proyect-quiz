const InputMenu = () => {
  return (
    <div className=" flex gap-2">
      <div className="w-full border ring rounded-xl ring-bg-slate-200 p-2">
      <input
        className="placeholder:outline-none rounded-xl w-full h-10 text-xl focus:outline-none"
        type="number"
        min={1}
        max={30}
        defaultValue={1}
      />
      </div>
    </div>
  );
};
export default InputMenu;
