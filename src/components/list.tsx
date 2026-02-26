import { useVinStore } from "../store/useVinStore";
import { PiTrashLight } from "react-icons/pi";

const List = () => {
  const { history, removeVin } = useVinStore();

  return (
    <ul className="space-y-3">
      {history.length === 0 && <li className="text-gray-500">No VINs yet</li>}

      {history.map((item) => (
        <li
          key={item}
          className="flex justify-between group bg-white rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition "
        >
          <span>{item}</span>
          <button
            onClick={() => removeVin(item)}
            className="cursor-pointer hover:text-red-500 active:scale-80 transition opacity-0 group-hover:opacity-100"
          >
            <PiTrashLight />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
