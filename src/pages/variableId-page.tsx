import { useParams } from "react-router-dom";
import { useVinStore } from "../store/useVinStore";

const VariableIdPages = () => {
  const { results } = useVinStore();

  const { id } = useParams<{ id: string }>();

  const result = results.find((item) => item.VariableId === Number(id));

  return (
    <table className="w-full text-left">
      <thead className="bg-slate-100 text-slate-600 text-sm uppercase tracking-wide">
        <tr>
          <th className="px-6 py-4 font-semibold">Variable</th>
          <th className="px-6 py-4 font-semibold">Value</th>
        </tr>
      </thead>

      <tbody className="divide-y divide-slate-100 text-slate-700">
        <tr className="hover:bg-slate-50 transition">
          <td className="px-6 py-4 font-medium">{result?.Variable}</td>
          <td className="px-6 py-4">{result?.Value}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default VariableIdPages;
